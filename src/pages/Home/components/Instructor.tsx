import { 
  SchoolOutlined, 
  WorkspacePremiumOutlined,
  MusicNoteOutlined
} from "@mui/icons-material";
import sujung from "../../../assets/sujung.webp";

function Instructor() {

  const education = [
    { year: 2012, title: "한양대 피아노과 졸업" },
    { year: 2015, title: "독일 트로싱엔 국립음대 석사 졸업" },
    { year: 2019, title: "독일 할레대학교 음대 피아노페다고지 졸업"},
    { year: 2019, title: "독일 할레대학교 음대 최고연주자과정 수료"}
  ];

  return(
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl mb-6 font-bold">강사 소개</h2>
        <img 
          src={sujung} 
          className="rounded-full w-1/3 max-w-xl min-w-xs max-h-fit mb-3" 
          alt="sujung-pic" 
        />
        <div>
          <div className="mb-3">
            <h4 className="flex items-center text-xl">
              <SchoolOutlined sx={{ marginRight: "4px", fontSize: "1.1em" }}/> 학력
            </h4>
            <ul className="ml-7">
              {education.map((item, index) => 
                <li key={index}>
                  <div className="flex">
                    <span className="mr-2">{item.year}</span> 
                    <span>{item.title}</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="mb-3">
            <h4 className="flex items-center text-xl">
              <WorkspacePremiumOutlined sx={{ marginRight: "4px", fontSize: "1.1em" }}/>주요 경력
            </h4>
          </div>
          <div>
            <h4 className="flex items-center text-xl">
              <MusicNoteOutlined sx={{ marginRight: "4px", fontSize: "1.1em" }}/>활동
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Instructor;