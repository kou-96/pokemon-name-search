import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Search() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    setText(text);
    setText("");
    navigate(`/Pokemon?inputField=${text}`);
  };

  return (
    <>
      <div>
        <h1>Pokemon Search</h1>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}>検索</button>
      </div>
      <div style={{ margin: 50 }}></div>
    </>
  );
}
