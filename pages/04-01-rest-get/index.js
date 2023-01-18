import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [title, setTitle] = useState("");

  const onClickAsync = () => {
    // 비동기
    const res = axios.get("https://koreanjson.com/posts/1");
    console.log(res); // Promise {<pending>}
  };
  // async function onClickSync() {
  const onClickSync = async () => {
    // 동기
    const res = await axios.get("https://koreanjson.com/posts/1");
    console.log(res); // {data: {…}, status: 200, …}
    console.log(res.data.id); // 1
    setTitle(res.data.title);
  };

  return (
    <>
      <div>Rest Api</div>
      <button onClick={onClickAsync}>비동기 요청</button>
      <button onClick={onClickSync}>동기 요청</button>
      <div>{title}</div>
    </>
  );
}
