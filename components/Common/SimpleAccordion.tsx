import { ReactElement } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Item = { title: string; description: string };

interface Props {
  list: Item[];
}

export default function SimpleAccordion({ list }): ReactElement<Props> {
  return (
    <div>
      {list.map((item: Item) => {
        return (
          <Accordion key={item.title}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <b>{item.title}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography textAlign={"left"}>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
