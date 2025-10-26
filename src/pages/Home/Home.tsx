import Header from "../../shared/header/Header.tsx";
import { Button, ThemeProvider } from "@mui/material";
import btnTheme from "../../styles/btnTheme.ts";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-15" >
        <h1 className="bg-red-400">이수정 피아니스트 사이트</h1>
        <ThemeProvider theme={btnTheme}>
          <Button variant="contained" onClick={() => navigate("/apply")}>
            신청하기
          </Button>
        </ThemeProvider>
      </main>
    </>
  );
}

export default Home;