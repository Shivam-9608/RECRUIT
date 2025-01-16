import { Grid, Typography } from "@mui/material";
import "./Technologies.css";

function Technologies() {
  return (
    <div>
      <Typography>
        <h1 className="Top-trendy">Top trendy Technologies</h1>
      </Typography>

      <Grid container justifyContent={"center"}>
        <Grid
          container
          item
          md={10}
          xs={10}
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
          textAlign={"center"}
          marginTop={"10px"}
        >
          <Grid item xs={6} sm={6} md={3} lg={2.5}>
            <Typography
              sx={{
                bgcolor: " #e7fffd",
                borderRadius: "25px",
                padding: "13px 20px",
                fontWeight: "500",
                fontSize: "22px",
              }}
            >
              REACT{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2.5}>
            <Typography
              sx={{
                bgcolor: " #e7fffd",
                borderRadius: "25px",
                padding: "13px 20px",
                fontWeight: "500",
                fontSize: "22px",
              }}
            >
              {" "}
              MONGODB
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2.5}>
            <Typography
              sx={{
                bgcolor: " #e7fffd",
                borderRadius: "25px",
                padding: "13px 20px",
                fontWeight: "500",
                fontSize: "22px",
              }}
            >
              {" "}
              NODEJS
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2.5}>
            <Typography
              sx={{
                bgcolor: " #e7fffd",
                borderRadius: "25px",
                padding: "13px 20px",
                fontWeight: "500",
                fontSize: "22px",
              }}
            >
              {" "}
              EXPRESS
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2.5}>
            <Typography
              sx={{
                bgcolor: " #e7fffd",
                borderRadius: "25px",
                padding: "13px 20px",
                fontWeight: "500",
                fontSize: "22px",
              }}
            >
              ANGULAR{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2.5}>
            <Typography
              sx={{
                bgcolor: " #e7fffd",
                borderRadius: "25px",
                padding: "13px 20px",
                fontWeight: "500",
                fontSize: "22px",
              }}
            >
              {" "}
              AWS
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2.5}>
            <Typography
              sx={{
                bgcolor: " #e7fffd",
                borderRadius: "25px",
                padding: "13px 20px",
                fontWeight: "500",
                fontSize: "22px",
              }}
            >
              {" "}
              JAVASCRIPT
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2.5}>
            <Typography
              sx={{
                bgcolor: " #e7fffd",
                borderRadius: "25px",
                padding: "13px 20px",
                fontWeight: "500",
                fontSize: "22px",
              }}
            >
              {" "}
              GITHUB
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2.5}>
            <Typography
              sx={{
                bgcolor: " #e7fffd",
                borderRadius: "25px",
                padding: "13px 20px",
                fontWeight: "500",
                fontSize: "22px",
              }}
            >
              PYTHON{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2.5}>
            <Typography
              sx={{
                bgcolor: " #e7fffd",
                borderRadius: "25px",
                padding: "13px 20px",
                fontWeight: "500",
                fontSize: "22px",
              }}
            >
              {" "}
              C, C++
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2.5}>
            <Typography
              sx={{
                bgcolor: " #e7fffd",
                borderRadius: "25px",
                padding: "13px 20px",
                fontWeight: "500",
                fontSize: "22px",
              }}
            >
              {" "}
              CHATGPT
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2.5}>
            <Typography
              sx={{
                bgcolor: " #e7fffd",
                borderRadius: "25px",
                padding: "13px 20px",
                fontWeight: "500",
                fontSize: "22px",
              }}
            >
              {" "}
              CORE JAVA
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Technologies;
