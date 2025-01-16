import { Box, Grid, Typography } from "@mui/material";
import silli from "../../../assets/Techovise/smiling-people-checking-giant-check-list-background 1.png";
import duo from "../../../assets/Techovise/duo.png";
import com from "../../../assets/Techovise/com.png";
import five from "../../../assets/Techovise/5.png";

import "./Process.css";

function Process() {
  return (
    <Grid container justifyContent={"center"} className="bcg">
      <Typography marginTop={"30px"}>
        <h1>Our Process</h1>
      </Typography>
      <Grid item md={11} sm={10} xs={10}>
        <Grid container spacing={2}>
          {/* Step 1 */}
          <Grid sx={{ marginTop: "30px" }}>
            <Grid
              container
              justifyContent={"center"}
              sx={{ paddingTop: "50px" }}
              spacing={3}
            >
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "200px",
                    height: "200px",
                    backgroundColor: "#008B73", // Green background
                    clipPath:
                      "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)", // Perfect decagon shape
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "auto",
                    boxShadow: "0px 40px 60px rgba(0, 0, 0, 0.2)", // Shadow effect
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { xs: "14px", md: "18px" },
                      fontWeight: "bold",
                    }}
                  >
                    STEP-1
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "0",
                      borderLeft: "15px solid transparent",
                      borderRight: "15px solid transparent",
                      borderTop: "20px solid #008B73", // Same color as the decagon
                    }}
                  ></Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <Grid
                  className="big-box"
                  container
                  alignItems={"center"}
                  sx={{
                    bgcolor: "white",
                  }}
                >
                  <Grid item xs={12} sm={4} textAlign={"center"}>
                    <img
                      src={silli}
                      alt=""
                      style={{ width: "100%", maxWidth: "200px" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    textAlign={"start"}
                    sx={{ padding: "10px" }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Analyze the Technical Requirements:
                    </Typography>
                    <Typography>
                      We begin by deeply analyzing your company's technical
                      requirements and understanding your tech-stack needs. Our
                      AI-driven model generates detailed reports based on your
                      SDLC model to ensure precise matching.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Step 2 */}
          <Grid sx={{ marginTop: "30px" }}>
            <Grid
              container
              justifyContent={"center"}
              sx={{ paddingTop: "50px", gap: "30px" }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: { md: "none", xs: "block", sm: "block" } }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "200px",
                    height: "200px",
                    backgroundColor: "#008B73",
                    clipPath:
                      "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "auto",
                    boxShadow: "0px 40px 60px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { xs: "14px", md: "18px" },
                      fontWeight: "bold",
                    }}
                  >
                    STEP-2
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "0",
                      borderLeft: "15px solid transparent",
                      borderRight: "15px solid transparent",
                      borderTop: "20px solid #008B73",
                    }}
                  ></Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Grid
                  className="big-box"
                  container
                  alignItems={"center"}
                  sx={{
                    bgcolor: "white",
                  }}
                >
                  <Grid item xs={12} sm={4} textAlign={"center"}>
                    <img
                      src={duo}
                      alt=""
                      style={{
                        width: "100%",
                        maxWidth: "200px",
                        padding: "5px 0px 20px 0px",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    textAlign={"start"}
                    sx={{ padding: "10px" }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Analyze the Technical Requirements:
                    </Typography>
                    <Typography>
                      We begin by deeply analyzing your company's technical
                      requirements and understanding your tech-stack needs. Our
                      AI-driven model generates detailed reports based on your
                      SDLC model to ensure precise matching.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: { md: "flex", xs: "none", sm: "none" } }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "200px",
                    height: "200px",
                    backgroundColor: "#008B73",
                    clipPath:
                      "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "auto",
                    boxShadow: "0px 40px 60px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { xs: "14px", md: "18px" },
                      fontWeight: "bold",
                    }}
                  >
                    STEP-2
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "0",
                      borderLeft: "15px solid transparent",
                      borderRight: "15px solid transparent",
                      borderTop: "20px solid #008B73",
                    }}
                  ></Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* Step 3 */}
          <Grid sx={{ marginTop: "30px" }}>
            <Grid
              container
              justifyContent={"center"}
              sx={{ paddingTop: "50px" }}
              spacing={3}
            >
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "200px",
                    height: "200px",
                    backgroundColor: "#008B73", // Green background
                    clipPath:
                      "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)", // Perfect decagon shape
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "auto",
                    boxShadow: "0px 40px 60px rgba(0, 0, 0, 0.2)", // Shadow effect
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { xs: "14px", md: "18px" },
                      fontWeight: "bold",
                    }}
                  >
                    STEP-3
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "0",
                      borderLeft: "15px solid transparent",
                      borderRight: "15px solid transparent",
                      borderTop: "20px solid #008B73", // Same color as the decagon
                    }}
                  ></Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <Grid
                  className="big-box"
                  container
                  alignItems={"center"}
                  sx={{
                    bgcolor: "white",
                  }}
                >
                  <Grid item xs={12} sm={4} textAlign={"center"}>
                    <img
                      src={com}
                      alt=""
                      style={{
                        width: "100%",
                        maxWidth: "200px",
                        height: "170px",
                        padding: "20px 0px 20px 0px",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    textAlign={"start"}
                    sx={{ padding: "10px" }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Analyze the Technical Requirements:
                    </Typography>
                    <Typography>
                      We begin by deeply analyzing your company's technical
                      requirements and understanding your tech-stack needs. Our
                      AI-driven model generates detailed reports based on your
                      SDLC model to ensure precise matching.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Step 4 */}
          <Grid sx={{ padding: "30px 0px 50px 0px" }}>
            <Grid
              container
              justifyContent={"center"}
              sx={{ paddingTop: "50px", gap: "30px" }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: { md: "none", xs: "block", sm: "block" } }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "200px",
                    height: "200px",
                    backgroundColor: "#008B73",
                    clipPath:
                      "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "auto",
                    boxShadow: "0px 40px 60px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { xs: "14px", md: "18px" },
                      fontWeight: "bold",
                    }}
                  >
                    STEP-4
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "0",
                      borderLeft: "15px solid transparent",
                      borderRight: "15px solid transparent",
                      borderTop: "20px solid #008B73",
                    }}
                  ></Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Grid
                  className="big-box"
                  container
                  alignItems={"center"}
                  sx={{
                    bgcolor: "white",
                  }}
                >
                  <Grid item xs={12} sm={4} textAlign={"center"}>
                    <img
                      src={five}
                      alt=""
                      style={{
                        width: "100%",
                        maxWidth: "200px",
                        padding: "25px 0px 20px 0px",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    textAlign={"start"}
                    sx={{ padding: "10px" }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Analyze the Technical Requirements:
                    </Typography>
                    <Typography>
                      We begin by deeply analyzing your company's technical
                      requirements and understanding your tech-stack needs. Our
                      AI-driven model generates detailed reports based on your
                      SDLC model to ensure precise matching.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: { md: "flex", xs: "none", sm: "none" } }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "200px",
                    height: "200px",
                    backgroundColor: "#008B73",
                    clipPath:
                      "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "auto",
                    boxShadow: "0px 40px 60px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { xs: "14px", md: "18px" },
                      fontWeight: "bold",
                    }}
                  >
                    STEP-4
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "0",
                      borderLeft: "15px solid transparent",
                      borderRight: "15px solid transparent",
                      borderTop: "20px solid #008B73",
                    }}
                  ></Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Process;
