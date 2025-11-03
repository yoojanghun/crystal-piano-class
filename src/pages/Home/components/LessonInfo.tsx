import { 
  SchoolOutlined, 
  Piano
} from "@mui/icons-material";

function LessonInfo() {

  return(
    <>
      <h2 className="text-4xl mb-6 font-medium text-center">
        레슨 모집 대상
      </h2>
      <p className="text-center text-zinc-600 leading-8">
        안녕하세요:)
        피아니스트 이수정입니다! <br />
        학생의 장점과 단점을 빠르게 파악하여 그에 맞는 가장 적합한 레슨을 제공하며, <br /> 
        탄탄한 기본기 훈련, 음악을 스스로 만들어가는 훈련을 통하여 
        입시와 콩쿨을 책임집니다. <br />
        꼼꼼한 레슨으로 기본기를 잡고 <br />
        눈높이 설명으로 빠르고 쉽게 이해할 수 있도록 하며 <br />
        체계적 연습방법으로 실력을 향상시킵니다^^
      </p>
      <div className="flex justify-center gap-3.5">
        <div className="border">
          <h4 className="flex text-xl">
            <SchoolOutlined sx={{ marginRight: "4px" }}/>
            전공반 / 입시반
          </h4>
          
        </div>
        <div className="border">
          <h4 className="flex text-xl">
            <Piano sx={{ marginRight: "4px" }}/>
            취미반
          </h4>
          
        </div>
      </div>
    </>
  )
}

export default LessonInfo;