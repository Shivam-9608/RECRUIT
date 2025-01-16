import { Grid, Typography, Button, Box } from "@mui/material";
import "./Techovise.css";

function Techovise() {
  return (
    <Grid container spacing={2} justifyContent={"center"} marginTop={"30px"} >
      <Grid item md={10} xs={11}>
        <Box
          sx={{
            border: "3px solid #008B73",
            padding: "30px 40px",
            borderRadius: "10px",
            boxShadow:"0px 10px 20px rgba(0,0,0,0.2)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography  sx={{
                fontSize: 30,
                fontWeight: "bold",
                color: "dark",
                
              }}>Experience the Techovise Advantage -</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{
                fontSize: 23,
                color: "dark",

              }}>99% Resource Retain Accuracy</Typography>
              <Typography sx={{
                fontSize: 23,
                color: "dark",
              }}>Free for Early Users for a Limited Time</Typography>
            </Grid>
            <Grid item xs={12} container alignItems={"center"} justifyContent={"space-between"}>
              <Typography sx={{
                fontSize: 26,
                color: "#008B73",
                fontWeight: "700",

              }}>
                Hurry up! Recruit smart & retain strong with Techovise.
              </Typography >
              <Button sx={{
                backgroundColor: "#008B73",
                color: "white",
                padding:'11px 45px',
                borderRadius:'10px',
                fontWeight:'600',
                fontSize:'16px'
              }}>Explore More</Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Techovise;
