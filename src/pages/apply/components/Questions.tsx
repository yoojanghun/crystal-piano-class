import { Button, TextField, ThemeProvider } from "@mui/material"
import btnTheme from "../../../styles/btnTheme"
import { useApplyPage } from "../../../shared/apply/apply"

function Questions() {
  const decreasePage = useApplyPage(state => state.decreasePage);

  return(
    <>
      <h2>질문 있으면 적어주세요</h2>
        <TextField 
          multiline
          rows={5}
        />
        <ThemeProvider theme={btnTheme}>
          <Button variant="contained" 
            onClick={decreasePage}
            color="secondary">
              이전
          </Button>
        </ThemeProvider>
    </>
  )
}

export default Questions;