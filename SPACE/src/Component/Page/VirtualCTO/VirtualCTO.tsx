import React from "react";
import {
  Typography,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CTO from "../../../assets/Techovise/CTO.png";
import "./VirtualCTO.css";

function VirtualCTO() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
  (panel: string) =>
  (_event: React.ChangeEvent<any>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };



  return (
    <div>
      {/* Header Section */}
      <Typography
        variant="h4"
        sx={{ textAlign: "center", padding: { xs: "20px", md: "50px" } }}
      >
        Virtual CTO
      </Typography>

      {/* Content Section */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        bgcolor="#E4FFF9"
        sx={{ padding: { xs: "10px", sm: "20px", md: "70px" } }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={5} display="flex" justifyContent="center">
          <img
            src={CTO}
            alt="CTO"
            style={{ width: "70%",height: "auto", objectFit:"contain" }}
          />
        </Grid>

        {/* Accordion Section */}
        <Grid item xs={12} md={6}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: "20px" }}
            >
              <Typography sx={{ flexShrink: 0 }}>Who is a CTO?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A CTO (Chief Technology Officer) is responsible for a company’s
                technological needs and R&D strategies.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ padding: "20px" }}
            >
              <Typography sx={{ flexShrink: 0 }}>
                Why do companies need a CTO?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                CTOs help companies drive innovation, streamline technology
                strategies, and maintain a competitive edge.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
              sx={{ padding: "20px" }}
            >
              <Typography
                sx={{
                  flexShrink: 0,
                  fontSize: {
                    xs: "12px", // Smaller font size for mobile devices
                    sm: "16px", // Medium font size for tablets
                    md: "14px", // Normal font size for desktop
                  },
                }}
              >
                Why Startups Should Consider Virtual CTOs?
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                Virtual CTOs offer affordable, flexible, and strategic
                technology leadership, especially for startups with limited
                resources.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
              sx={{ padding: "20px" }}
            >
              <Typography
                sx={{
                  flexShrink: 0,
                  fontSize: {
                    xs: "12px", // Smaller font size for mobile devices
                    sm: "16px", // Medium font size for tablets
                    md: "14px", // Normal font size for desktop
                  },
                }}
              >
                Why Choose a Virtual CTO from TechoVise?
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                TechoVise provides experienced Virtual CTOs tailored to your
                business needs, ensuring growth and innovation.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
}

export default VirtualCTO;
