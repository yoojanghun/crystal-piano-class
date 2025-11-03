import sujungLogo from "../../assets/sujung-logo.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Button,
  Menu,
  MenuItem 
} from "@mui/material";

type ScrollProps = {
  onScroll?: {                  // onScroll을 만약 받는다면 onScroll 사용
    instructor: () => void;
    lessonInfo: () => void;
  }
}

function Header({ onScroll }: ScrollProps) {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);   // anchor가 어디에 붙을 지 지정
  const open = Boolean(anchorEl);                                       // 메뉴가 열려 있는 지 여부

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return(
    <header className="fixed w-full py-1 px-2.5 border-b-2 border-b-zinc-300 bg-white z-99">
      <nav className="flex justify-between items-center">
        <img 
          src={sujungLogo} 
          alt="sujung pic" 
          className="w-10 h-10 cursor-pointer ml-4"
          onClick={() => navigate("/")}
        />
        <ul className="flex items-center list-none">
          <li 
            className="px-5 cursor-pointer"
          >
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              About Us
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}             // 메뉴가 열릴 기준 위치 (버튼)
              open={open}                     // 열림 여부
              onClose={handleClose}           // 닫기 함수
              disableScrollLock={true}        // 스크롤바 안 사라지게 함
            >
              <MenuItem onClick={onScroll?.instructor}>강사 소개</MenuItem>
              <MenuItem onClick={onScroll?.lessonInfo}>레슨 모집</MenuItem>
            </Menu>
          </li>
          <li className="px-5 cursor-pointer">Program</li>
          <li className="px-5 cursor-pointer">Recruit</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;