import { Typography, Grid } from "@mui/material";
import nasscon from "../../../assets/Techovise/nasscon.png";
import star from "../../../assets/Techovise/star.png";
import stpi from "../../../assets/Techovise/stpi.png";
import msme from "../../../assets/Techovise/msme.png";
import hindu from "../../../assets/Techovise/hindu.png";
import news from "../../../assets/Techovise/news.png";

function Achivements() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{ textAlign: "center", padding: { xs: "20px", md: "50px" } }}
          >
            <h1> News, Media & Recognition</h1>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ color: "green", textAlign: "center" }}>
            <h1>Our Achievements and Accolades</h1>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "18px", md: "22px" },
              paddingX: "10px",
            }}
          >
            Techovise has been recognized by various media outlets and industry
            bodies for our innovative approach to recruitment and retention.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        textAlign={"center"}
        alignItems={"center"}
        padding={{ xs: "20px", md: "40px" }}
      >
        <Grid item md={3} lg={2.7} sm={6} xs={10}>
          <img
            src={nasscon}
            alt="Nasscon"
            height={"70px"}
            style={{ marginTop: "30px" }}
          />
        </Grid>
        <Grid item md={3} lg={2.7} sm={6} xs={10}>
          <img
            src={star}
            alt="Star"
            height={"70px"}
            style={{ marginTop: "30px" }}
          />
        </Grid>
        <Grid item md={3} lg={2.7} sm={6} xs={10}>
          <img src={stpi} alt="STPI" height={"100px"} />
        </Grid>
        <Grid item md={3} lg={2.7} sm={6} xs={10}>
          <img src={msme} alt="MSME" height={"100px"} />
        </Grid>
        </Grid>
        <Grid
        container
        justifyContent="center"
        textAlign={"center"}
        alignItems={"center"}
        padding={{ xs: "20px", md: "40px" }}
      >
        <Grid item md={3} lg={5} sm={6} xs={10}>
          <img
            src={hindu}
            alt="Nasscon"
            style={{ width: "100%", maxWidth: "400px", height: "150px" }}
          />
        </Grid>
        <Grid item md={3} lg={5} sm={6} xs={10}>
          <img
            src={news}
            alt="Star"
            style={{ width: "100%", maxWidth: "200px", height: "auto" }}
          />
        </Grid>
      </Grid>
      <Typography
        sx={{ textAlign: "center", padding: { xs: "20px", md: "50px" } }}
      >
        <h1>Connect with Our Expert to Start Recruiting</h1>
      </Typography>
    </div>
  );
}

export default Achivements;
