import { Grid, Typography, Button } from "@mui/material";
import techo from "../../../assets/TechoviseWhiteLogo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <Grid>
        {/* Main Footer Background */}
        <Grid
          bgcolor={"#00876D"}
          marginTop={"60px"}
          sx={{
            padding: {
              xs: "20px", // For extra-small screens
              sm: "30px", // For small screens
              md: "50px", // For medium and above
            },
          }}
        >
          
          <Grid container justifyContent={"space-between"} spacing={2} gap={"11px"}>
            <Grid item xs={12} sm={6} md={3.8} lg={3} sx={{ color: "white" }}>
              <Typography>
                {" "}
                <img src={techo} alt="TechoVise Logo" height={"150px"} />
                <p style={{ textAlign: "justify", fontSize: "14px" }}>
                  Techovise is dedicated to transforming the recruitment
                  landscape by providing companies with skilled resources that
                  match their technical requirements and retain them for the
                  long term.
                </p>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3.8} lg={2} sx={{ color: "white" , marginTop:"30px" }}>
              <Typography marginTop={"20px"}>
                <h4 style={{ fontSize: "18px" }}>Quick Links</h4>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>User</p>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>Guide</p>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3.8} lg={2} sx={{ color: "white" , marginTop:"30px" }}>
              <Typography marginTop={"20px"}>
                <h4 style={{ fontSize: "18px" }}>Terms of Use</h4>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>
                  Privacy Policy
                </p>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>
                  Terms & Conditions
                </p>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3.8} lg={2} sx={{ color: "white" , marginTop:"30px" }}>
              <Typography marginTop={"20px"}>
                <h4 style={{ fontSize: "18px" }}>Quick Links</h4>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>Home</p>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>About Us</p>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>Services</p>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>Contacts</p>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>Blogs</p>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3.8} lg={2} sx={{ color: "white" }}>
              <Typography marginTop={"20px"}>
                <h4 style={{ fontSize: "18px" }}>Social Media & Address</h4>
                {/* Social Media Icons */}
                <Grid
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  marginTop={"10px"}
                >
                  <FacebookOutlinedIcon />
                  <InstagramIcon />
                  <TwitterIcon />
                  <LinkedInIcon />
                </Grid>
                {/* Address Section */}
                <p style={{ marginTop: "20px", fontSize: "14px" }}>
                  Head Office: L - 9 / 826, 4th Floor Mehrauli South Delhi-
                  110030
                </p>
                <Grid
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  marginTop={"10px"}
                >
                  <PhoneIcon />
                  9205-9191-24
                </Grid>
                <p style={{ marginTop: "20px", fontSize: "14px" }}>
                  Branch Office: Near SBI ATM Block Road, Refugee Colony
                  Saharsa, Bihar - 852201
                </p>
                <Grid
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  marginTop={"10px"}
                >
                  <PhoneIcon />
                  9205-9191-25
                </Grid>
                {/* WhatsApp Button */}
                <Button
                  className="button"
                  sx={{
                    borderColor: "success",
                    color: "white",
                    marginTop: "20px",
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "14px",
                    },
                  }}
                  size="large"
                >
                  <Grid
                    style={{
                      display: "flex",
                      gap: "10px",
                      textAlign: "center",
                      alignItems: "center",
                      margin: "9px 4px 3px 4px",
                    }}
                  >
                    <WhatsAppIcon />
                    Chat On Whatsapp
                  </Grid>
                </Button>
              </Typography>
            </Grid>
          </Grid>

          <Grid marginTop={"50px"}>
            <hr style={{ borderColor: "white" }} />
            <Typography
              textAlign={"center"}
              padding={"20px"}
              color="white"
              fontSize={{
                xs: "12px",
                sm: "14px",
                md: "16px",
              }}
            >
              © 2024 TechIntelliVerse Private Limited. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
