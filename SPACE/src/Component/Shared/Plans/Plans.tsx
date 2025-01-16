import { Grid, Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Plans.css";

function Plans() {
  return (
    <div>
      <Grid>
        <Typography sx={{ paddingTop: "50px", textAlign: "center" }}>
          {" "}
          <h1>Subscription Plans For IT Services</h1>
        </Typography>
        <Grid>
          <Grid
            container
            textAlign={"center"}
            justifyContent={"center"}
            gap={"50px"}
            marginTop={"50px"}
          >
            <Grid item xs={10} sm={6} md={4} lg={3}   className="big-box"> 
              <Typography sx={{ textAlign: "center" }}>
                <h2
                  style={{ backgroundColor: "#00876D", borderRadius: "8px" , color:"white", padding:"15px" }}
                >
                  Basic Plan <br />
                  (3 Months){" "}
                </h2>
              </Typography>

              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  6 Images in a Month
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  0 Video in a Month
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  1000 INR for one pager website
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  2500 INR for 1 Year Hosting Plan
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  10 AM to 6 PM Support on Email.
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",

                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  Mon Fri Tech Support in a week.
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  1000 INR for each additional static webpages.
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "80px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#00876D",
                  borderRadius: "10px",
                  color: "white",
                  margin: "0px 12px 20px",
                  textAlign: "left",
                  
                  
                }}
              >
                <Box sx={{ textAlign: "left", marginTop: "30px" , paddingLeft:"20px",py:1 }}>
                  <s style={{ fontSize: "25px", paddingTop:"150px",textDecorationColor:"yellow" }}>9000 /-</s> <br />
                  <p style={{ fontSize: "25px" ,display:"flex",justifyContent:"end", paddingRight:"20px"  }}> 4500/-</p>
                </Box>
              </Box>
            </Grid>
          
            <Grid item xs={10} sm={6} md={4} lg={3}   className="big-box">
              <Typography sx={{ textAlign: "center" }}>
                <h2
                  style={{ backgroundColor: "#00876D", borderRadius: "8px" , color:"white", padding:"15px" }}
                >
                 Intermediate Plan <br />
                 (6 Months){" "}
                </h2>
              </Typography>

              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  12 Images in a Month
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  1 Video in a Month
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  500 INR for one pager website
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  2000 INR for 1 Year Hosting Plan
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  10 AM to 6 PM Support on Email.
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",

                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  Mon Fri Tech Support in a week.
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" , }}>
                  800 INR for each additional static webpages.
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "80px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#00876D",
                  borderRadius: "10px",
                  color: "white",
                  margin: "0px 12px 20px",
                  textAlign: "left",
                  
                  
                }}
              >
                <Box sx={{ textAlign: "left", marginTop: "55px" , paddingLeft:"20px",py:1 }}>
                  <s style={{ fontSize: "25px", paddingTop:"150px",textDecorationColor:"yellow" }}>24000 /-</s> <br />
                  <p style={{ fontSize: "25px" ,display:"flex",justifyContent:"end", paddingRight:"20px"  }}> 12000/-</p>
                </Box>
              </Box>
            </Grid>
          
            <Grid item xs={10} sm={6} md={4} lg={3}   className="big-box">
              <Typography sx={{ textAlign: "center" }}>
                <h2
                  style={{ backgroundColor: "#00876D", borderRadius: "8px" , color:"white", padding:"15px" }}
                >
                  Basic Plan <br />
                  (12 Months){" "}
                </h2>
              </Typography>

              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  24 Images in a Month
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  2 Video in a Month
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  Free  for one pager website
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  2500 INR for 1 Year Hosting Plan
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  10 AM to 6 PM Support on Email.
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",

                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  Mon Fri Tech Support in a week.
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "20px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#00876D" }} />
                <Typography sx={{ textAlign: "start" }}>
                  500 INR for each additional static webpages.
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  paddingLeft: "80px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#00876D",
                  borderRadius: "10px",
                  color: "white",
                  margin: "0px 12px 20px",
                  textAlign: "left",
                  
                  
                }}
              >
                <Box sx={{ textAlign: "left", marginTop: "55px" , paddingLeft:"20px",py:1 }}>
                  <s style={{ fontSize: "25px", paddingTop:"150px",textDecorationColor:"yellow" }}>3000 /-</s> <br />
                  <p style={{ fontSize: "25px" ,display:"flex",justifyContent:"end", paddingRight:"20px"  }}> 25000/-</p>
                </Box>
              </Box>
            </Grid>
          


          </Grid>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default Plans;
