import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import Lifecycle from "./Lifecycle";

// https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = () => {};

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    // const newDiaryList = [...data];
    // data.forEach((it, idx) => {
    //   if (it.id === targetId) {
    //     newDiaryList.splice(idx, 1);
    //     setData(newDiaryList);
    //   }
    // });
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    // const newDiaryList = [...data];
    // newDiaryList.forEach((it) => {
    //   if (it.id === targetId) {
    //     it.content = newContent;
    //   }
    // });
    // setData(newDiaryList);
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
