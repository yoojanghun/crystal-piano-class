import { motion } from "framer-motion";
import Header from "../../shared/header/Header.tsx";
import { Button, ThemeProvider } from "@mui/material";
import btnTheme from "../../styles/btnTheme.ts";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import backgroundPiano from "../../assets/piano-bg.jpg";
import Instructor from "./components/Instructor.tsx";

function Home() {
  const navigate = useNavigate();
  const instructorRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if(ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  } 

  return (
    <>
      <Header onScroll={{
        instructor: () => scrollToSection(instructorRef)
      }}/>
      <main className="min-h-screen" >
        <section className="w-screen h-screen overflow-hidden relative">
          <motion.img 
            src={backgroundPiano} 
            className="w-full h-full object-cover object-[center_70%]" 
            alt="piano-background-pic" 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <div className="bg-black/25 absolute inset-0 flex flex-col justify-center items-center">
            <motion.h1 
              className="text-white text-4xl mb-5"
              initial={{ opacity:0, y: 30 }}
              animate={{ opacity:1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            >
              이수정 피아노 레슨
            </motion.h1>
            <motion.p 
              className="text-white leading-6.5 text-center text-lg mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            >
              피아노 잘하고 싶은 사람 신청하세요 <br />
              알겠습니까? 바로 신청하세요
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.7 }}
            >
              <ThemeProvider theme={btnTheme}>
                <Button 
                  variant="text" 
                  sx={{
                    padding: "8px 25px",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    backgroundColor: "#2d2d2d",
                    "&:hover": {
                      backgroundColor: "#000000",                     }
                  }}
                  onClick={() => navigate("/apply")}
                >
                  레슨 신청하기
                </Button>
              </ThemeProvider>
            </motion.div>
          </div>
        </section>
        <section className="mt-20" ref={instructorRef}>
          <Instructor />
        </section>
      </main>
    </>
  );
}

export default Home;