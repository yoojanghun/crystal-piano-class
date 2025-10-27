import Header from "../../shared/header/Header.tsx";
import { Button, ThemeProvider } from "@mui/material";
import btnTheme from "../../styles/btnTheme.ts";
import { useNavigate } from "react-router-dom";
import backgroundPiano from "../../assets/piano-bg.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-12" >
        <section className="w-screen h-screen overflow-hidden">
          <img src={backgroundPiano} className="w-full h-full object-cover object-[center_70%]" alt="piano-background-pic" />
        </section>
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