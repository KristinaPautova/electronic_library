import React, { Fragment } from "react";
import "./Questions.scss";
import question from "./img/question.svg";
import down from "./img/down.svg";
import top from "./img/top.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Questions = () => (
  <Fragment>
    <main>
      <section className="question__frame">
        <div className="content__container">
          <img className="image" src={question} alt="girl with a question" />
          <h1>Частые вопросы</h1>
          <div className="question__frame-text">
            <p>Отвечаем на вопросы, которые у вас могут возникнуть.</p>
          </div>
        </div>
      </section>
      <section className="asked_questions__frame">
        <div className="team__frame-wrapper">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ background: "#F7F7F8" }}
            >
              <Typography>Могу ли я отменить бронь?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Да, но деньги за бронь не возвращаются</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              style={{ background: "#F7F7F8" }}
            >
              <Typography>
                Могу ли я вернуть деньги, если не подошёл автомобиль?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Да</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ background: "#F7F7F8" }}
            >
              <Typography>Что делать, если случилось ДТП?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Данный вопрос обсуждается с собственником</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ background: "#F7F7F8" }}
            >
              <Typography>
                Могу ли я оставить автомобиль в удобном для меня месте?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Данный вопрос обсуждается с собственником, но как правило
                автомобиль нужно вернуть туда, где вы его получили.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ background: "#F7F7F8" }}
            >
              <Typography>
                Что делать, если собственник просит заплатить ему напрямую?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Сообщить нашей организации</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ background: "#F7F7F8" }}
            >
              <Typography>Должен ли я заправлять автомобиль?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Данный вопрос обсуждается с собственником</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
    </main>
  </Fragment>
);

export default Questions;
