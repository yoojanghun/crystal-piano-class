import { 
  Accordion, 
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import { 
  ArrowDropDown 
} from "@mui/icons-material";

function Questions() {
  return(
    <div className="w-full flex justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
            Questions
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            자주 묻는 질문
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-8 break-keep">
            자주 묻는 질문을 정리해 보았다. <br />
            추가로 궁금한 점은 아래 카톡으로 질문해 주시거나, <br /> 
            레슨 신청할 때 질문사항에 작성해 주시오.
          </p>
        </div>

        <div>
          <Accordion>
            <AccordionSummary>
              <span>안녕하십니까</span>
              <ArrowDropDown />
            </AccordionSummary>
            <AccordionDetails>
              반갑습니다
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <span>안녕하십니까</span>
              <ArrowDropDown />
            </AccordionSummary>
            <AccordionDetails>
              반갑습니다
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Questions;