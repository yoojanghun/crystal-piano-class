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
      <div className="flex flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
              Professional Pianist
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              PIANIST 이수정
            </h2>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src={sujung} 
                  className="rounded-full w-48 h-48 sm:w-56 sm:h-56 object-cover ring-4 ring-white/80 outline outline-indigo-100/70" 
                  alt="sujung-pic" 
                />
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-100/30 to-purple-100/30 -z-10 blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid gap-6 sm:gap-8">
            {/* 학력 Section */}
            <div className="bg-linear-to-br from-white/90 to-white/60 rounded-2xl p-6 sm:p-8 border border-slate-200/80 ring-1 ring-white/60 backdrop-blur-sm">
              <h4 className="flex items-center text-xl sm:text-2xl font-semibold text-slate-900 mb-6 pb-3 border-b border-slate-200">
                <SchoolOutlined 
                  sx={{ 
                    marginRight: "8px", 
                    fontSize: "1.3em",
                    color: "#6366f1"
                  }}
                /> 
                학력
              </h4>
              <ul className="space-y-4">
                {education.map((item, index) => 
                  <li key={index} className="flex items-start gap-4 group">
                    <span className="shrink-0 w-16 sm:w-20 text-sm sm:text-base font-semibold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg text-center">
                      {item.year}
                    </span> 
                    <span className="flex-1 text-slate-700 leading-relaxed break-keep pt-1.5">
                      {item.title}
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {/* 입상 경력 Section */}
            <div className="bg-linear-to-br from-white/90 to-white/60 rounded-2xl p-6 sm:p-8 border border-slate-200/80 ring-1 ring-white/60 backdrop-blur-sm">
              <h4 className="flex items-center text-xl sm:text-2xl font-semibold text-slate-900 mb-6 pb-3 border-b border-slate-200">
                <WorkspacePremiumOutlined 
                  sx={{ 
                    marginRight: "8px", 
                    fontSize: "1.3em",
                    color: "#f59e0b"
                  }}
                />
                입상 경력
              </h4>
              <ul className="space-y-3">
                {achievments.map((item, index) => 
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-2.5 group-hover:bg-amber-600 transition-colors"></span>
                    <span className="flex-1 text-slate-700 leading-relaxed break-keep whitespace-pre-line">
                      {item}
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {/* 연주 활동 Section */}
            <div className="bg-linear-to-br from-white/90 to-white/60 rounded-2xl p-6 sm:p-8 border border-slate-200/80 ring-1 ring-white/60 backdrop-blur-sm">
              <h4 className="flex items-center text-xl sm:text-2xl font-semibold text-slate-900 mb-6 pb-3 border-b border-slate-200">
                <MusicNoteOutlined 
                  sx={{ 
                    marginRight: "8px", 
                    fontSize: "1.3em",
                    color: "#8b5cf6"
                  }}
                />
                연주 활동
              </h4>
              <ul className="space-y-3">
                {performances.map((item, index) => 
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-purple-500 mt-2.5 group-hover:bg-purple-600 transition-colors"></span>
                    <span className="flex-1 text-slate-700 leading-relaxed break-keep whitespace-pre-line">
                      {item}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Instructor;