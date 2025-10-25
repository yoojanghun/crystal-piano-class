import Header from "../../shared/Header/Header.tsx";
import styles from "./Apply.module.css";
import { TextField, Button, ThemeProvider } from "@mui/material";
import inputTheme from "../../styles/inputTheme.ts";
import btnTheme from "../../styles/btnTheme.ts";
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
            <h2>성함과 나이를 입력해 주세요!!</h2>
            <ThemeProvider theme={inputTheme}>
              <TextField 
                label="성함" 
                variant="standard"
              />
              <TextField 
                label="나이"
                variant="standard"  
              />
            </ThemeProvider>
            <ThemeProvider theme={btnTheme}>
              <Button variant="contained" 
                onClick={() => navigate("/")}
                color="secondary">
                  홈 페이지 돌아가기
              </Button>
              <Button variant="contained" 
                onClick={() => setApplyPage(applyPage + 1)}
                color="primary">
                  다음
              </Button>
            </ThemeProvider>
          </div>
        )}

        {applyPage === 2 && (
          <div>
            <h2>지원동기가 무엇입니까?</h2>
            <ThemeProvider theme={btnTheme}>
              <Button variant="contained" 
                onClick={() => navigate("/")}
                color="secondary">
                  이전
              </Button>
              <Button variant="contained" 
                onClick={() => setApplyPage(applyPage + 1)}
                color="primary">
                  다음
              </Button>
            </ThemeProvider>
          </div>
        )}
        
        {applyPage === 3 && (
          <div>
            <h2>질문 있으면 적어주세요</h2>
            <ThemeProvider theme={btnTheme}>
              <Button variant="contained" 
                onClick={() => setApplyPage(applyPage - 1)}
                color="secondary">
                  이전
              </Button>
            </ThemeProvider>
          </div>
        )}
      </main>
    </>
  )
}

export default Apply;