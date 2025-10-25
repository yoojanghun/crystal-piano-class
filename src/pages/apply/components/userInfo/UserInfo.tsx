import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@emotion/react";
import styles from "./UserInfo.module.css";
import theme from "../../../../styles/inputTheme";

function UserInfo() {
  return(
    <>
      <h2>성함과 나이를 입력해 주세요!!</h2>
      <ThemeProvider theme={theme}>
        <TextField 
          label="성함" 
          variant="standard"
        />
        <TextField 
          label="나이"
          variant="standard"  
        />
      </ThemeProvider>
    </>
  );
}

export default UserInfo;