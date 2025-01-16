import { Box, Button, Grid, Typography } from "@mui/material";
import "./RecruitSection.css";
import LoginForm from "../../Shared/LoginForm/LoginForm";
function RecruitSection() {
  return (
    <div>
      <Box>
        <Grid
          container spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            bgcolor: "#e6fffd",
            paddingBottom: "40px",
            px: { md: "40px", xs: "20px" },
          }}
        >
          <Grid item md={5} sm={6}>
            <Typography>
              <Typography
                className="Recruit"
                sx={{ fontSize: { md: "50px", xs: "40px" }, fontWeight:'bold',  fontFamily:'monsterrat', }}
              >
                Recruit Smart & Retain Strong
              </Typography>
              <h2 className="Techovise">
                Techovise - Your Partner in Smart Recruitment and Strong
                Retention:
              </h2>
              <Typography style={{ textAlign: "justify" }}>
                Recruit the best, retain the best. At Techovise, we understand
                the importance of having skilled resources who fit your
                technical needs perfectly and stay with you for the long haul.
                Let's transform your recruitment process and build a robust team
                together.
              </Typography>
              <Button
                sx={{
                  padding: "12px 60px",
                  bgcolor: "rgb(33, 120, 91)",
                  color: "white",
                  marginTop: "30px",
                  fontSize: "17px",
                  textTransform:"capitalize",
                  fontWeight:"bold"
                }}
              >
                Enquiry Now
              </Button>
            </Typography>
          </Grid>
          <Grid
            item
            md={5}
            sm={6}
            container
            justifyContent={"center"}
            sx={{ justifyContent: { md: "end", xs: "center" } }}
          >
            <LoginForm />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default RecruitSection;
