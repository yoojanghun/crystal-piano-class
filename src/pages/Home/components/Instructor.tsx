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

  const achievments = [
    "고신대학교 음악콩쿨 1위",
    "부산음교 콩풀, 부산 음협콩쿨 다수 입상",
    "International competition “Citta di Barletta” 2위",
    "트로싱엔국립음대 DAAD 장학생 선발",
  ];
  
  const performances = [
    "한양대학교 설립 50주년 기념 동문음악회 연주",
    "독일 첼로 플룻 실내악 연주 \n(독일 트로싱엔 국립음대 Konzertsaal, Martin Luther Kirche)",
    "독일 MDR 라디오방송 출연",
    "바이올린 앙상블 연주 \n(벨기에 브뤼셀 Vertretung des Landes Sachsen-Anhalt Konzertsaal, 독일 할레대학교 Konzertsaal)",
    "피아노 독주회 및 초청연주 \n(베를린 Musikinstrumenten Museum Curt-Sachs-Saal, 베를린 Landesvertretung Sachsen-Anhalt Konzertsaal, 할레 Moritzburg Museum, 할레 Roter horizont)",
    "IMPULS 현대음악 페스티벌 피아니스트로 활동하면서 실내악 오페라 ”Spiel im Sand” 초연 (독일 Halle Oper Theater, Magdeburg Schauspielhaus), John Adams의 “Gnarly Buttons” 초연 (독일 Halle Steintor Variente)",
    "금정문화회관 플룻독주회, 실내악 연주",
    "해운대문화회관 해운홀 귀국 피아노독주회",
    "신라대학교 음악대학원 초청 세미나 특강 \"효율적인 연주를 위한 연습방법\"",
    "대구 콘서트하우스 쳄버홀 청년 클래식음악제 앙상블연주",
    "2020년 6월7일 금호아트홀 연세 피아노 독주회",
    "쿱오케스트라, 부산내셔널심포니오케스트라 초청 협연연주",
    "부산 국제마루음악제 초청연주",
    "2022년 11월 8일 예술의전당 인춘아트홀 피아노독주회",
    "부산 독우회, 한국 피아노학회 회원",
    "부산예술고등학교, 덕원예술고등학교, 고신대학교 출강",
    "글로벌영재 음악교육원 피아노 책임교수",
    "리유트리오, 한양솔로이스츠, 앙상블 라인 멤버"
  ];

  return(
    <>
      <div className="flex flex-col items-center bg-[#F9FAFB] border-b-2 border-zinc-200 pb-5">
        <h2 className="text-4xl mb-6 font-bold">강사 소개</h2>
        <img 
          src={sujung} 
          className="rounded-full w-1/3 max-w-xl min-w-xs max-h-fit mb-3" 
          alt="sujung-pic" 
        />
        <div className="max-w-xl min-w-[360px]">
          <div className="mb-3 px-3">
            <h4 className="flex items-center text-xl">
              <SchoolOutlined sx={{ marginRight: "4px", marginBottom: "2px", fontSize: "1.1em" }}/> 학력
            </h4>
            <ul className="ml-7">
              {education.map((item, index) => 
                <li key={index}>
                  <div className="flex">
                    <span className="mr-2">{item.year}</span> 
                    <span className="break-keep">{item.title}</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="mb-3 px-3">
            <h4 className="flex items-center text-xl">
              <WorkspacePremiumOutlined sx={{ marginRight: "4px", marginBottom: "2px", fontSize: "1.1em" }}/>입상 경력
            </h4>
            <ul className="ml-7">
              {achievments.map((item, index) => 
                <li key={index} className="mb-1.5">
                  <div className="flex">
                    <span className="mr-1">•</span>
                    <span className="break-keep whitespace-pre-line">{item}</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="mb-3 px-3">
            <h4 className="flex items-center text-xl">
              <MusicNoteOutlined sx={{ marginRight: "2px", marginBottom: "2px", fontSize: "1.1em" }}/> 연주 활동
            </h4>
            <ul className="ml-7">
              {performances.map((item, index) => 
                <li key={index} className="mb-1.5">
                  <div className="flex">
                    <span className="mr-1">•</span>
                    <span className="break-keep whitespace-pre-line">{item}</span>
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