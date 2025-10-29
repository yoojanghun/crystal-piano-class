import sujung from "../../../assets/sujung.webp";

function Instructor() {

  return(
    <>
      <h2>강사 소개</h2>
      <div>
        <img src={sujung} className="rounded-full" alt="sujung-pic" />
        <div>
          안녕하세요 이수정 강사 입니다 <br />
          저는 피아노 선생님 입니다
        </div>
      </div>
    </>
  )
}

export default Instructor;