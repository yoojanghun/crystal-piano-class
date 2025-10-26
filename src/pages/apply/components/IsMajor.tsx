import { Button, ThemeProvider } from "@mui/material";
import btnTheme from "../../../styles/btnTheme";
import { useApplyPage } from "../../../shared/apply/apply";

function IsMajor({ name }: { name: string }) {
  const increasePage = useApplyPage(state => state.increasePage);
  const decreasePage = useApplyPage(state => state.decreasePage);

  return(
    <>
      <h2>{name} 님 안녕하세요!! 지원동기가 무엇입니까?</h2>
      <ThemeProvider theme={btnTheme}>
        <Button variant="contained" 
          onClick={decreasePage}
          color="secondary">
            이전
        </Button>
        <Button variant="contained" 
          onClick={increasePage}
          color="primary">
            다음
        </Button>
      </ThemeProvider>
    </>
  )
}

export default IsMajor;