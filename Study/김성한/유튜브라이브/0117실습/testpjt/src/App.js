import "./App.css";
import { DataGrid } from "@mui/x-data-grid";

function App() {
  const columns = [
    { field: "id", headerName: "사번", width: 90 },
    { field: "name", headerName: "이름", width: 190 },
    { field: "teamNo", headerName: "팀", width: 90 },
  ];

  const rows = [
    { id: 1, name: "메시", teamNo: "A301" },
    { id: 2, name: "모드리치", teamNo: "A302" },
    { id: 3, name: "제라드", teamNo: "A303" },
    { id: 4, name: "토레스", teamNo: "A304" },
    { id: 5, name: "라울", teamNo: "A305" },
    { id: 6, name: "메시", teamNo: "A301" },
    { id: 7, name: "모드리치", teamNo: "A302" },
    { id: 8, name: "제라드", teamNo: "A303" },
    { id: 9, name: "토레스", teamNo: "A304" },
    { id: 10, name: "라울", teamNo: "A305" },
    { id: 11, name: "메시", teamNo: "A301" },
    { id: 12, name: "모드리치", teamNo: "A302" },
    { id: 13, name: "제라드", teamNo: "A303" },
    { id: 14, name: "토레스", teamNo: "A304" },
    { id: 15, name: "라울", teamNo: "A305" },
    { id: 16, name: "메시", teamNo: "A301" },
    { id: 17, name: "메시", teamNo: "A301" },
    { id: 18, name: "메시", teamNo: "A301" },
    { id: 19, name: "메시", teamNo: "A301" },
    { id: 20, name: "메시", teamNo: "A301" },
    { id: 21, name: "메시", teamNo: "A301" },
    { id: 22, name: "모드리치", teamNo: "A302" },
    { id: 23, name: "제라드", teamNo: "A303" },
    { id: 24, name: "토레스", teamNo: "A304" },
    { id: 25, name: "라울", teamNo: "A305" },
    { id: 26, name: "메시", teamNo: "A301" },
    { id: 27, name: "모드리치", teamNo: "A302" },
    { id: 28, name: "제라드", teamNo: "A303" },
    { id: 29, name: "토레스", teamNo: "A304" },
    { id: 30, name: "메시", teamNo: "A301" },
    { id: 31, name: "메시", teamNo: "A301" },
    { id: 32, name: "모드리치", teamNo: "A302" },
    { id: 33, name: "제라드", teamNo: "A303" },
    { id: 34, name: "토레스", teamNo: "A304" },
    { id: 35, name: "라울", teamNo: "A305" },
    { id: 36, name: "메시", teamNo: "A301" },
    { id: 37, name: "모드리치", teamNo: "A302" },
    { id: 38, name: "제라드", teamNo: "A303" },
    { id: 39, name: "토레스", teamNo: "A304" },
    { id: 40, name: "메시", teamNo: "A301" },
    { id: 41, name: "메시", teamNo: "A301" },
    { id: 42, name: "모드리치", teamNo: "A302" },
    { id: 43, name: "제라드", teamNo: "A303" },
    { id: 44, name: "토레스", teamNo: "A304" },
    { id: 45, name: "라울", teamNo: "A305" },
    { id: 46, name: "메시", teamNo: "A301" },
    { id: 47, name: "모드리치", teamNo: "A302" },
    { id: 48, name: "제라드", teamNo: "A303" },
    { id: 49, name: "토레스", teamNo: "A304" },
    { id: 50, name: "메시", teamNo: "A301" },
    { id: 51, name: "메시", teamNo: "A301" },
    { id: 52, name: "모드리치", teamNo: "A302" },
    { id: 53, name: "제라드", teamNo: "A303" },
    { id: 54, name: "토레스", teamNo: "A304" },
    { id: 55, name: "라울", teamNo: "A305" },
    { id: 56, name: "메시", teamNo: "A301" },
    { id: 57, name: "모드리치", teamNo: "A302" },
    { id: 58, name: "제라드", teamNo: "A303" },
    { id: 59, name: "토레스", teamNo: "A304" },
    { id: 60, name: "메시", teamNo: "A301" },
    { id: 61, name: "메시", teamNo: "A301" },
    { id: 62, name: "모드리치", teamNo: "A302" },
    { id: 63, name: "제라드", teamNo: "A303" },
    { id: 64, name: "토레스", teamNo: "A304" },
    { id: 65, name: "라울", teamNo: "A305" },
    { id: 66, name: "메시", teamNo: "A301" },
    { id: 67, name: "모드리치", teamNo: "A302" },
    { id: 68, name: "제라드", teamNo: "A303" },
    { id: 69, name: "토레스", teamNo: "A304" },
    { id: 70, name: "메시", teamNo: "A301" },
    { id: 71, name: "메시", teamNo: "A301" },
    { id: 72, name: "모드리치", teamNo: "A302" },
    { id: 73, name: "제라드", teamNo: "A303" },
    { id: 74, name: "토레스", teamNo: "A304" },
    { id: 75, name: "라울", teamNo: "A305" },
    { id: 76, name: "메시", teamNo: "A301" },
    { id: 77, name: "모드리치", teamNo: "A302" },
    { id: 78, name: "제라드", teamNo: "A303" },
    { id: 79, name: "토레스", teamNo: "A304" },
  ];

  return (
    <div className="App">
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default App;

/*
import "./App.css";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';


function App() {
  const title = ["이름", "전공"];
  // const name = ["박세영", "서요셉"];
  // const major = ["산업공학", "컴퓨터공학"];

  const [name, setName] = useState(["김감자", "김고구마"]);
  const [major, setMajor] = useState(["컴퓨터공학과", "간호학과"]);

  const handleOnClick = () => {
    setName([...name, "김모짜"]);
    setMajor([...major, "기니피그"]);
  };

  return (
    <div className="App">
      <button onClick={handleOnClick}>다른 사람 정보보기</button>
      <table>
        <thead>
          <tr>
            <th>{title[0]}</th>
            <th>{title[1]}</th>
          </tr>
        </thead>
        <tbody>
          {name.map((element, index) => {
            return <TrComp name={name[index]} major={major[index]} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

// Component
function TrComp(props) {
  return (
    <tr>
      <th>{props.name}</th>
      <td>{props.major}</td>
    </tr>
  );
}

export default App;

*/
