import Header from "../../shared/Header/Header.tsx";
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
import { useApplyPage } from "../../shared/apply/apply.ts";
import { useState, useEffect, useMemo } from "react";
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

const steps = [
  {
    id: 1,
    title: "기본 정보",
    description: "이름과 나이를 알려주시면 가장 적합한 커리큘럼을 제안해 드릴 수 있어요."
  },
  {
    id: 2,
    title: "학습 배경",
    description: "전공 여부와 학습 경험을 알려주세요. 레슨 방향을 정하는 데 꼭 필요해요."
  },
  {
    id: 3,
    title: "레슨 취향",
    description: "원하시는 레슨 분위기와 목표를 적어주시면 맞춤형 클래스를 준비할 수 있어요."
  }
];

{/* useState는 다음 렌더링 때, 특정 값으로 바꿔달라고 요청만 하는 것 (useState의 비동기 특성) */}
function Apply() {
  const navigate = useNavigate();
  const applyPage = useApplyPage(state => state.applyPage);
  const increasePage = useApplyPage(state => state.increasePage);
  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState("");
  const [error, setError] = useState(true);
  const [phoneNum, setPhoneNum] = useState({
    textmask: '',
    numberformat: '1320',
  });

  const currentStep = useMemo(() => 
    steps.find(step => step.id === applyPage) ?? steps[0]
    ,[applyPage]
  );

  // progress bar가 몇 퍼센트인지 (steps.length = 3)
  const progress = useMemo(() => 
    Math.min((applyPage / steps.length) * 100, 100)
    ,[applyPage]
  );
  
  useEffect(() => {
    if (username.trim() === "" || userage === "" || phoneNum.textmask.length !== 13) {
      setError(true);
    }
    else {
      setError(false);
    }
  }, [username, userage, phoneNum.textmask]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhoneNum({
      ...phoneNum,
      [e.target.name]: e.target.value,
    });
  }

  return(
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
          <div className="flex flex-col gap-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Crystal Piano Class
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl break-keep">
              반가워요 🎹 피아노 여정을 함께할 준비되셨나요?
            </h1>
            <p className="text-base text-slate-600 sm:text-lg break-keep">
              {currentStep.description}
            </p>
          </div>

          <section className="flex flex-col gap-8 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100 sm:p-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-sm font-medium text-slate-600">
                <span>
                  Step {applyPage} / {steps.length}
                </span>
                <span className="font-semibold text-slate-900">{currentStep.title}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-indigo-500 transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {applyPage === 1 && (
              <div className="flex flex-col gap-8">
                <ThemeProvider theme={inputTheme}>
                  <Box component="form" noValidate>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                      }}
                    >
                      <TextField 
                        label="성함" 
                        variant="standard"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                      />
                      <TextField
                        type="number"
                        label="나이"
                        variant="standard" 
                        value={userage}
                        onChange={(e) => setUserage(e.target.value)}
                        fullWidth
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
                      <FormControl variant="standard" fullWidth>
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
                      <p className="text-sm text-slate-500">
                        예: 010-1234-5678 형태로 입력해 주세요.
                      </p>
                    </Box>
                  </Box>
                </ThemeProvider>

                <ThemeProvider theme={btnTheme}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:gap-4">
                    <Button 
                      variant="outlined"
                      onClick={() => navigate("/")}
                      color="secondary"
                      fullWidth
                    >
                      홈으로 돌아가기
                    </Button>
                    <Button 
                      variant="contained" 
                      onClick={increasePage}
                      color="primary"
                      disabled={error}
                      fullWidth
                    >
                      다음 단계로
                    </Button>
                  </div>
                </ThemeProvider>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  )
}

export default Apply;