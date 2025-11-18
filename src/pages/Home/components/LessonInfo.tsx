import { 
  SchoolOutlined, 
  Piano
} from "@mui/icons-material";

function LessonInfo() {

  const lessonInfo = [
    {
      title: "전공반 / 입시반",
      desc: "영재 · 예중 · 예고 · 음대 · 유학 대비 커리큘럼",
      icon: SchoolOutlined,
      items: [
        "1회 60~90분 | 맞춤형 심화 커리큘럼",
        "예중·예고·음대입시, 편입, 독일 유학까지 장기 플랜 설계",
        "클래스 연주회·홀 연습 등 정기 무대 경험 제공",
        "콩쿨·실기 대비 자체 모의평가로 실전 감각 강화🤔",
      ],
    },
    {
      title: "취미반",
      desc: "뉴에이지 · 클래식 · CCM · 가요",
      icon: Piano,
      items: [
        "1회 45분 | 집중 1:1 개인 레슨",
        "희망 곡 완주 목표, 즐거운 취미 루틴 회복",
        "악보 읽기·기본기 탄탄히 다지는 눈높이 설명😁👍",
        "다양한 맞춤 교재로 속도와 이해도를 동시에",
      ],
    },
  ]
  
  return(
    <>
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
              Lesson Programs
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              레슨 모집 대상
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 leading-8 break-keep">
              피아니스트 이수정입니다:) 학생의 장점과 단점을 빠르게 파악해 가장 적합한 레슨을 제공합니다. <br />
              탄탄한 기본기 훈련과 음악을 스스로 만들어가는 과정을 통해 입시와 콩쿨을 책임지며, <br />
              눈높이 설명과 체계적 연습 방법으로 레슨 직후 실력 향상을 체감할 수 있도록 돕습니다.
            </p>
          </div>

          <div className="sm:px-0 grid gap-6 sm:gap-8 md:grid-cols-2">
            {lessonInfo.map(({ title, desc, icon:Icon, items }) => (
              <article key={title} className="rounded-2xl p-6 sm:p-8 border border-slate-200/80 bg-white shadow-sm">
                <h4 className="flex items-center text-xl sm:text-2xl font-semibold text-slate-900 mb-6 pb-3 border-b border-slate-200">
                  <Icon 
                    sx={{ 
                      marginRight: "8px", 
                      fontSize: "1.3em",
                      color: "#393E46"
                    }}
                  />
                  {title}
                </h4>
                <p className="text-sm font-medium text-slate-500 mb-5">{desc}</p>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="shrink-0 w-2 h-2 rounded-full bg-[#393E46] mt-2.5"></span>
                      <span className="flex-1 text-slate-700 leading-relaxed break-keep">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LessonInfo;