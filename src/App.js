import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchData(){
      
    }

  });
  return (
    <div>
      <h1>헤커뉴스 데이터 입니다.</h1>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      ></input>
      <div></div>
    </div>
  );
}

export default App;
