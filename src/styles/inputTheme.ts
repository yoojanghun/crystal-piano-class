import { createTheme } from '@mui/material';

const inputTheme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          // 포커스 상태일 때 밑줄 색상 변경
          '&:after': {
            borderBottomColor: 'green',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // 포커스 상태일 때 라벨 색상 변경
          '&.Mui-focused': {
            color: 'green',
          },
        },
      },
    },
  },
});

export default inputTheme;