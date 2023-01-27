function addChange(editor, from, to, text) {
  let adjust = editor.listSelections().findIndex(({ anchor, head }) => {
    return (
      CodeMirror.cmpPos(anchor, head) == 0 &&
      CodeMirror.cmpPos(anchor, from) == 0
    );
  });
  editor.operation(() => {
    editor.replaceRange(text, from, to, "yorkie");
    if (adjust > -1) {
      let range = editor.listSelections()[adjust];
      if (
        range &&
        CodeMirror.cmpPos(
          range.head,
          CodeMirror.changeEnd({ from, to, text })
        ) == 0
      ) {
        let ranges = editor.listSelections().slice();
        ranges[adjust] = { anchor: from, head: from };
        editor.setSelections(ranges);
      }
    }
  });
}

async function main() {
  const editor = CodeMirror.fromTextArea(
    document.getElementById("codemirror"),
    {
      lineNumbers: true,
    }
  );

  const client = new yorkie.Client("http://3.39.186.240:8080");
  await client.activate();

  const doc = new yorkie.Document("doc1");
  await client.attach(doc);

  doc.update((root) => {
    if (!root.content) {
      root.content = new yorkie.Text();
    }
  });

  // 코드미러 => yorkie 쪽으로

  editor.on("beforeChange", (cm, change) => {
    // (1)
    if (change.origin === "yorkie" || change.origin === "setValue") {
      return;
    }
    console.log(change);

    // (2)
    const from = editor.indexFromPos(change.from);
    const to = editor.indexFromPos(change.to);
    // (3)
    const content = change.text.join("\n");
    // (4)
    doc.update((root) => {
      root.content.edit(from, to, content);
    });
  });

  // yorkie => codemirror
  doc.getRoot().content.text.onChanges((changes) => {
    console.log(changes);
    // (1)
    for (const change of changes) {
      // (2)
      if (change.type !== "content" || change.actor === client.getID()) {
        continue;
      }
      // (3)
      const from = editor.posFromIndex(change.from);
      const to = editor.posFromIndex(change.to);

      // (4), (5)
      addChange(editor, from, to, change.content || "");
      // editor.replaceRange(change.content, from, to, 'yorkie')
    }
  });
  editor.setValue(doc.getRoot().content.toString());
}
main();
