/* -----------------------기존 Vanilla JS에서의 WebSocket 이용 방식-----------------------
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("#message");
const nickForm = document.querySelector("#nick");
const socket = new WebSocket(`ws://${window.location.host}`);

function makeMessage(type, payload) {
  const msg = { type, payload };
  return JSON.stringify(msg);
  // 단순히 JSON으로 보내지 않고 String으로 변환하는 이유는 다양한 서버에서 사용하는 언어가 다르고 문자열로 보내 이후 파싱하기 위해서이다.
  // 또한 WS는 브라우저 API 이기 때문에 데이터에 관한 어떠한 관여도 할 수 없고 단순한 문자열을 처리하게 해야한다.
}

socket.addEventListener("open", () => {
  // socket 이 connection 을 open 했을때 발생하는 이벤트
  console.log("Connectd to Server");
});

socket.addEventListener("message", (message) => {
  const li = document.createElement("li");
  li.innerText = message.data;
  messageList.append(li);
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server");
});

// setTimeout(() => {
//   socket.send("Hello!! from the Client");
// }, 10000);

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(makeMessage("new_message", input.value));
  const li = document.createElement("li");
  li.innerText = `You : ${input.value}`;
  messageList.append(li);
  input.value = "";
}

function handleNickSubmit(event) {
  event.preventDefault();
  const input = nickForm.querySelector("input");
  socket.send(makeMessage("nickname", input.value));
  input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);

*/

// --------------------------------------------------------------

const socket = io();
// 백엔드와 연결 설정
// socket.io 를 사용하는 서버를 알아서 찾음 => 잘 이해는 안되지만 일단 그렇게 알자
const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function addMessage(message) {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = message;
  ul.appendChild(li);
}

function handleMessageSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#msg input");
  const value = input.value;
  socket.emit("new_message", input.value, roomName, () => {
    addMessage(`You : ${value}`);
  });
  // new_message 이벤트가 발생한 시점과 addMessage를 실행한 시점이 다르기 때문에 위와 같이 별도의 value 변수를 선언해 저장하였음
  input.value = "";
}

function handleNicknameSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#name input");
  socket.emit("nickname", input.value);
}

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
  const msgForm = room.querySelector("#msg");
  const nameForm = room.querySelector("#name");
  msgForm.addEventListener("submit", handleMessageSubmit);
  nameForm.addEventListener("submit", handleNicknameSubmit);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = document.querySelector("input");
  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  // emit은 이벤트 등록이다. => 이름 맘대로 설정 가능
  // 이전 처럼 String이 아닌 JSON 객체로 보낼 수 있다. => Socket.io 제공 기능
  // 3번째 인자로는 서버에서 호출하는 function(콜백) 이 들어간다.
  // 즉, 서버에서 실행할 수 있는 함수를 전달할 수 있는 것이다.
  // 이때 서버에서 해당 funciton을 호출하게되면 해당 function은 frontend에서 실행되고 프론트에서 결과가 나온다.
  // emit으로 전달하는 인자의 수는 제한이 없다 => 원하는 만큼 보내면 됨 단, 백엔드에서 끝났다는 사실을 알리기 위해 function 을 넣고 싶다면 그 function이 마지막 인자가 되어야 한다.
  // 즉 마지막 인자의 함수를 백엔드에서 호출하는 것이 아니라 실행만 시키는것 => (보안 문제가 생길 수 있다. ex 디비삭제) frontend에서의 실행버튼을 눌러준다고보면 된다.
  // 또한 이 함수에 백엔드에서 인자를 보낼 수 있다.
  // 증말 으메이징
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", (user, newCount) => {
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName} (${newCount})`;
  addMessage(`${user} joined`);
});

socket.on("bye", (left, newCount) => {
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName} (${newCount})`;
  addMessage(`${left} left ㅠㅠ`.toString("utf-8"));
});

socket.on("new_message", (msg) => {
  addMessage(msg);
});

socket.on("room_change", (rooms) => {
  const roomList = welcome.querySelector("ul");
  roomList.innerHTML = ""; // room 정보를 refresh
  // rooms가 비어있으면 아무 동작도 하지않는다.
  // 아래와 같이 해결
  if (rooms.length === 0) {
    return;
  }
  // -----
  rooms.forEach((room) => {
    const li = document.createElement("li");
    li.innerText = room;
    roomList.append(li);
  });
});
