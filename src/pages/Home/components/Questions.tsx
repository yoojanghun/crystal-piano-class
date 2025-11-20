import { 
  Accordion, 
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { 
  ArrowDropUp 
} from "@mui/icons-material";
import { useState } from "react";

function Questions() {

  const [expanded, setExpanded] = useState<string | boolean>(false);

  const handleChange = (panel:string) => (
    _event:React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return(
    <div className="w-full flex justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-lg max-w-4xl">
        <div className="text-center mb-12">
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
          <Accordion 
            disableGutters
            expanded={expanded === "panel1"} 
            onChange={handleChange("panel1")}
            sx={{
              "&.Mui-expanded": {
                margin: 0,
              },
            }}
          >
            <AccordionSummary 
              expandIcon={<ArrowDropUp />}
              sx={{
                "&.Mui-expanded": {
                  backgroundColor: "#f1f5f9"
                }
              }}
            >
              가장 아끼는 제자가 누구인가요??
            </AccordionSummary>
            <AccordionDetails>
              유장훈 이에요!!
            </AccordionDetails>
          </Accordion>
          <Accordion 
            disableGutters
            expanded={expanded === "panel2"} 
            onChange={handleChange("panel2")}
            sx={{
              "&.Mui-expanded": {
                margin: 0,
              }
            }}
          >
            <AccordionSummary 
              expandIcon={<ArrowDropUp />}
              sx={{
                "&.Mui-expanded": {
                  backgroundColor: "#f1f5f9"
                }
              }}
            >
              가장 이쁜 제자가 누구인가요?
            </AccordionSummary>
            <AccordionDetails>
              유장훈이에요!!
            </AccordionDetails>
          </Accordion>
          <Accordion 
            disableGutters
            expanded={expanded === "panel3"} 
            onChange={handleChange("panel3")}
            sx={{
              "&.Mui-expanded": {
                margin: 0,
              }
            }}
          >
            <AccordionSummary 
              expandIcon={<ArrowDropUp />}
              sx={{
                "&.Mui-expanded": {
                  backgroundColor: "#f1f5f9"
                }
              }}
            >
              가장 소중한 제자가 누구인가요?
            </AccordionSummary>
            <AccordionDetails>
              유장훈 이에요!!!
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Questions;