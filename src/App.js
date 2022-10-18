import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

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
