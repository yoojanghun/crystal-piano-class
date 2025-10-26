import Header from "../../shared/Header/Header.tsx";
import styles from "./Apply.module.css";
import { 
  TextField, 
  Button, 
  Box,
  FormControl,
  Input,
  InputLabel,
  ThemeProvider } from "@mui/material";
import { IMaskInput } from "react-imask";
import inputTheme from "../../styles/inputTheme.ts";
import btnTheme from "../../styles/btnTheme.ts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const PhoneNumCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function PhoneNumCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other} 
        mask="000-0000-0000"
        definitions={{
          '#': /[0-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

{/* useState는 다음 렌더링 때, 특정 값으로 바꿔달라고 요청만 하는 것 (useState의 비동기 특성) */}
function Apply() {
  const navigate = useNavigate();
  const [applyPage, setApplyPage] = useState(1);
  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState("");
  const [error, setError] = useState(true);
  const [phoneNum, setPhoneNum] = useState({
    textmask: '',
    numberformat: '1320',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNum({
      ...phoneNum,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (username.trim() === "" || userage === "" || phoneNum.textmask === "") {
      setError(true);
    }
    else {
      setError(false);
    }
  }, [username, userage, phoneNum.textmask])

  return(
    <>
      <Header />
      <main className={styles["main-apply"]}>
        <h1>레슨 접수 페이지 입니다</h1>
        {applyPage === 1 && (
          <div>
            <h2>성함과 나이를 입력해 주세요!!</h2>
            <Box component="form" noValidate>       
              <ThemeProvider theme={inputTheme}>
                <TextField 
                  label="성함" 
                  variant="standard"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  type="number"
                  label="나이"
                  variant="standard" 
                  required
                  value={userage}
                  onChange={(e) => setUserage(e.target.value)}
                  slotProps={{
                    input: {
                      inputProps: {
                        min: 0,
                        max: 100,
                        step: 1
                      }
                    }
                  }}
                />
                <FormControl variant="standard">
                  <InputLabel htmlFor="formatted-text-mask-input">전화번호</InputLabel>
                  <Input
                    value={phoneNum.textmask}
                    onChange={handleChange}
                    required
                    name="textmask"
                    id="formatted-text-mask-input"
                    inputComponent={PhoneNumCustom as any}
                  />
                </FormControl>
              </ThemeProvider>
              <ThemeProvider theme={btnTheme}>
                <Button variant="contained" 
                  onClick={() => navigate("/")}
                  color="secondary">
                    홈 페이지 돌아가기
                </Button>
                <Button variant="contained" 
                  onClick={() => setApplyPage(applyPage + 1)}
                  color="primary"
                  disabled={error}>
                    다음
                </Button>
              </ThemeProvider>
            </Box>
          </div>
        )}

        {applyPage === 2 && (
          <div>
            <h2>{username} 님 안녕하세요!! 지원동기가 무엇입니까?</h2>
            <ThemeProvider theme={btnTheme}>
              <Button variant="contained" 
                onClick={() => setApplyPage(applyPage - 1)}
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
            <TextField 
              multiline
              rows={5}
            />
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