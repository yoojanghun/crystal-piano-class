import { 
  SchoolOutlined, 
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import sujung from "../../../assets/sujung.webp";

function Instructor() {

  const education = [
    { year: 2012, title: "한양대 피아노과 졸업" },
    { year: 2015, title: "독일 트로싱엔 국립음대 석사 졸업" },
    { year: 2019, title: "독일 할레대학교 음대 피아노페다고지 졸업"},
    { year: 2019, title: "독일 할레대학교 음대 최고연주자과정 수료"}
  ];

  const achievments = [
    "International competition “Citta di Barletta” 2위",
    "트로싱엔국립음대 DAAD 장학생 선발",
    "바이올린 앙상블 연주 ( 벨기에 브뤼셀 Vertretung des Landes Sachsen-Anhalt Konzertsaal, 독일 할레대학교 Konzertsaal)",
    "피아노 독주회 및 초청연주 ( 베를린 Musikinstrumenten Museum Curt-Sachs-Saal, 베를린 Landesvertretung Sachsen-Anhalt Konzertsaal, 할레 Moritzburg Museum, 할레 Roter horizont)",
    "IMPULS 현대음악 페스티벌 피아니스트로 활동하면서 실내악 오페라 ”Spiel im Sand” 초연 (독일 Halle Oper Theater, Magdeburg Schauspielhaus), John Adams의 “Gnarly Buttons” 초연 (독일 Halle Steintor Variente)",
    "독일 MDR 라디오방송 출연",
    "부산예고, 글로벌영재 음악교육원, 고신대학교 출강 /부산 독우회, 한국피아노학회 회원",
    "고신대학교 음악콩쿨 1위",
    "한양대학교 설립 50주년 기념 동문음악회 연주",
    "금정문화회관 플룻독주회, 실내악 연주",
    "해운대문화회관 해운홀 귀국 피아노독주회",
    "신라대학교 음악대학원 초청 세미나 특강 \"효율적인 연주를 위한 연습방법-암보와 릴렉스 중심으로\"",
    "2020 금호연세아트홀 귀국피아노독주회"
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
        <div className="max-w-xl min-w-[360px]">
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
            <ul className="ml-7">
              {achievments.map((item, index) => 
                <li key={index} className="mb-1.5">
                  <div className="flex">
                    <span className="mr-1">•</span>
                    <span>{item}</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Instructor;