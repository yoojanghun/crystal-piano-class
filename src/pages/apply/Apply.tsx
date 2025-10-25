import Header from "../../shared/Header/Header.tsx";
import UserInfo from "./components/userInfo/UserInfo.tsx";
import Motivation from "./components/motivation/motivation.tsx";
import Questions from "./components/questions/Questions.tsx";
import styles from "./Apply.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Apply() {
  const navigate = useNavigate();
  const [applyPage, setApplyPage] = useState(1);
  
  return(
    <>
      <Header />
      <main className={styles["main-apply"]}>
        <h1>레슨 접수 페이지 입니다</h1>
        {applyPage === 1 && (
          <div>
            <UserInfo />
            <button onClick={() => navigate("/")}>홈 페이지 돌아가기</button>
            <button onClick={() => setApplyPage(applyPage + 1)}>
              다음
            </button>
          </div>
        )}

        {applyPage === 2 && (
          <div>
            <Motivation />
            <button onClick={() => setApplyPage(applyPage - 1)}>
              이전
            </button>
            <button onClick={() => setApplyPage(applyPage + 1)}>
              다음
            </button>
          </div>
        )}
        
        {applyPage === 3 && (
          <div>
            <Questions />
            <button onClick={() => setApplyPage(applyPage - 1)}>
              이전
            </button>
          </div>
        )}

      </main>
    </>
  )
}

export default Apply;