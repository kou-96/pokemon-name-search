import { useNavigate } from "react-router-dom";

export function Page404() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <h1>404 ページが存在しません。</h1>
      </div>
      <div style={{ margin: 50 }}>
        <button onClick={goBack}>戻る</button>
      </div>
    </>
  );
}
