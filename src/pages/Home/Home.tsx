import Header from "../../shared/Header/Header.tsx";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className={styles.main} >
        <h1>이수정 피아니스트 사이트</h1>
        <button onClick={() => navigate("/apply")}>
          신청하기
        </button>
      </main>
    </>
  );
}

export default Home;