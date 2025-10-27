import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button, 
  ThemeProvider 
} from "@mui/material";
import btnTheme from "../../../styles/btnTheme";
import { useApplyPage } from "../../../shared/apply/apply";

function IsMajor({ name }: { name: string }) {
  const increasePage = useApplyPage(state => state.increasePage);
  const decreasePage = useApplyPage(state => state.decreasePage);

  return(
    <>
      <h2>{name} 님 안녕하세요!! 전공 레슨 신청 여부를 말해주세요</h2>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">레슨</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="major" control={<Radio />} label="전공" />
          <FormControlLabel value="hobby" control={<Radio />} label="비전공(취미)" />
        </RadioGroup>
      </FormControl>
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