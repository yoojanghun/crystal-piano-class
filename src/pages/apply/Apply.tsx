import UserInfo from "./components/userInfo/UserInfo.tsx";
import Questions from "./components/questions/Questions.tsx";
import { useState } from "react";

function Apply() {

  return(
    <>
      <h1>레슨 접수 페이지 입니다</h1>
      <UserInfo />
      
      <div>
        <button>다음</button>
        <button>이전</button>
      </div>
    </>
  )
}

export default Apply;