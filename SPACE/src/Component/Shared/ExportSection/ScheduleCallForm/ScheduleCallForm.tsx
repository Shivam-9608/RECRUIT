import {
  Grid,
  Typography,
  FormControl,
  OutlinedInput,
  Button,
} from "@mui/material";

import "./ScheduleCallForm.css";
//   import Selection from "../../../Shared/ExportSection/Section/Section";
import headphone from "../../../../assets/Techovise/headphone.png";

function ScheduleCallForm() {
  return (
    <div>
     
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            bgcolor: "#E4FFF9",
            padding: { xs: "10px", sm: "20px", md: "70px" },
          }}
        >
          <Grid item xs={11} md={11} lg={6}>
            <Typography
              padding={{ xs: "15px", md: "30px" }}
              color="#00876D"
              textAlign={{ xs: "center", md: "left" }}
            >
              <h2> Get Started with Techovise Today!</h2>
            </Typography>
            <Grid
              sx={{
                borderRadius: "10px",
                bgcolor: "white",
                padding: { xs: "15px", md: "30px" },
              }}
              className="name-box"
            >
              <Typography
                padding={{ xs: "10px", md: "30px" }}
                textAlign={{ xs: "center", md: "left" }}
              >
                Fill out the form below to connect with our recruitment experts
                and kickstart your journey to finding the perfect skilled
                resources for your company
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <label>Name</label>
                    <OutlinedInput placeholder="Please enter text" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <label>Company Name</label>
                    <OutlinedInput placeholder="Company Name" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <label>Company Email</label>
                    <OutlinedInput placeholder="Company Email" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <label>Phone No.</label>
                    <OutlinedInput placeholder="Phone No." />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <label>Linked In</label>
                    <OutlinedInput placeholder="Linked In" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <label>Recruitment For</label>
                    <OutlinedInput placeholder="Recruitment For" />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                sx={{ marginTop: "30px" }}
              >
                <Button
                className="ell"
                
                  variant="contained"
                  disableElevation
                  sx={{
                    padding: { xs: "10px 40px", md: "15px 70px" },
                  }}
                >
                  Schedule Call
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={11}
            md={11}
            lg={6}
            sx={{ textAlign: "center", marginTop: { xs: "20px", md: "100px" } }}
          >
            <img
              src={headphone}
              alt=""
              style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />
          </Grid>
        </Grid>
    </div>
  );
}

export default ScheduleCallForm;
