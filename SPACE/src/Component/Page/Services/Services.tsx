import { Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./Services.css";
import CardActionArea from "@mui/material/CardActionArea";
import card1 from "../../../assets/Techovise/card1.png";
import card2 from "../../../assets/Techovise/card2.png";
import card3 from "../../../assets/Techovise/card3.png";
import card4 from "../../../assets/Techovise/card4.png";
import card5 from "../../../assets/Techovise/card5.png";

function Services() {
  return (
    <div>
      <Grid
        sx={{ marginTop: "50px", textAlign: "center" }}
        justifyContent="center"
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", marginBottom: "30px", color: "black" }}
        >
          Our Services
        </Typography>
        <Grid sx={{ bgcolor: "#E6FFFD", textAlign: "center" }}>
          <Grid>
            <Typography
              textAlign="center"
              sx={{
                padding: "20px",
                borderRadius: "10px",
                fontSize: "18px",
              }}
            >
              InternNexus offers a range of services including website
              development, application development, and digital marketing, aimed
              at providing comprehensive solutions for businesses and
              individuals looking to enhance their online presence and reach.
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Grid
              container
              item
              md={10}
              xs={10}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
              padding={"50px 0px 50px 0px"}
              marginTop={"10px"}
            >
              <Grid item xs={11} sm={6} md={6} lg={4}>
                <Card
                  className="all-card"
                  sx={{ maxWidth: 345, borderRadius: "10px" }}
                >
                  <CardActionArea>
                    <img
                      className="img"
                      src={card1}
                      alt="Logo"
                      height={"170"}
                    />
                    <CardContent sx={{ padding: "0px" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontWeight: "bold",
                          paddingTop: "13px",
                          paddingBottom: "13px",
                        }}
                      >
                        <hr
                          style={{
                            border: "none",
                            borderTop: "4px solid #4CAF50",
                            width: "100%",
                            marginTop: "20px",
                            marginBottom: "20px",
                          }}
                        />
                        Website Development
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "normal",
                          fontSize: "22px",
                          textAlign: "justify",
                          px: "10px",
                          marginTop: "17px",
                          marginBottom: "20px",
                        }}
                      >
                        Website Development is the process of creating,
                        designing, and maintaining websites, ensuring they are
                        functional, user-friendly, and visually appealing.
                      </Typography>
                      <hr
                        style={{
                          border: "none",
                          borderTop: "4px solid #4CAF50",
                          width: "100%",
                          marginTop: "52px",
                        }}
                      />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={11} sm={6} md={6} lg={4}>
                <Card className="all-card" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <img
                      className="img"
                      src={card2}
                      alt="Logo"
                      height={"170"}
                    />

                    <CardContent sx={{ padding: "0px" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          paddingTop: "13px",
                          paddingBottom: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        <hr
                          style={{
                            border: "none",
                            borderTop: "4px solid #4CAF50",
                            width: "100%",
                            marginTop: "20px",
                            marginBottom: "20px",
                          }}
                        />
                        App Development
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "normal",
                          fontSize: "22px",
                          textAlign: "justify",
                          px: "10px",
                          marginTop: "17px",
                          marginBottom: "20px",
                        }}
                      >
                        App Development is the process of creating software
                        applications for mobile devices or desktops, focusing on
                        functionality, user experience, and performance.
                      </Typography>
                      <hr
                        style={{
                          border: "none",
                          borderTop: "4px solid #4CAF50",
                          marginTop: "52px",
                        }}
                      />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={11} sm={6} md={6} lg={4}>
                <Card className="all-card" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <img
                      className="img"
                      src={card3}
                      alt="Logo"
                      height={"170"}
                    />

                    <CardContent sx={{ padding: "0px" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          paddingTop: "13px",
                          paddingBottom: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        <hr
                          style={{
                            border: "none",
                            borderTop: "4px solid #4CAF50",
                            width: "100%",
                            marginTop: "20px",
                            marginBottom: "20px",
                          }}
                        />
                        Cyber Security
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "normal",
                          fontSize: "22px",
                          textAlign: "justify",
                          px: "10px",
                          marginTop: "17px",
                          marginBottom: "20px",
                        }}
                      >
                        Cybersecurity involves protecting systems, networks, and
                        data from digital attacks, unauthorized access, and
                        damage by implementing various security measures and
                        protocols.
                      </Typography>
                      <hr
                        style={{
                          border: "none",
                          borderTop: "4px solid #4CAF50",
                          width: "100%",
                          marginTop: "21px",
                        }}
                      />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid
                item
                xs={11}
                sm={6}
                md={6}
                lg={4}
                sx={{ marginTop: { lg: "60px", xs: "0px" } }}
              >
                <Card className="all-card" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <Grid sx={{ marginTop: "10px" }}>
                      <img
                        className="img"
                        src={card4}
                        alt="Logo"
                        height={"160"}
                      />
                    </Grid>

                    <CardContent sx={{ padding: "0px" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          paddingTop: "13px",
                          paddingBottom: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        <hr
                          style={{
                            border: "none",
                            borderTop: "4px solid #4CAF50",
                            width: "100%",
                            marginTop: "20px",
                            marginBottom: "20px",
                          }}
                        />
                        Cloud and Infra <br /> Management
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "normal",
                          fontSize: "21px",
                          textAlign: "justify",
                          px: "10px",
                          marginTop: "17px",
                          marginBottom: "20px",
                        }}
                      >
                        Cloud and Infra Management ensures efficient, secure,
                        and scalable operation of cloud services and IT
                        infrastructure.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <hr
                    style={{
                      border: "none",
                      borderTop: "4px solid #4CAF50",
                      width: "100%",
                      marginTop: "6px",
                    }}
                  />
                </Card>
              </Grid>
              <Grid
                item
                xs={11}
                sm={6}
                md={6}
                lg={4}
                sx={{ marginTop: { lg: "60px", xs: "0px" } }}
              >
                <Card className="all-card" sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <img
                      className="img"
                      src={card5}
                      alt="Logo"
                      height={"170"}
                    />

                    <CardContent sx={{ padding: "0px" }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          paddingTop: "13px",
                          paddingBottom: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        <hr
                          style={{
                            border: "none",
                            borderTop: "4px solid #4CAF50",
                            width: "100%",
                            marginTop: "20px",
                            marginBottom: "20px",
                          }}
                        />
                        Digital Marketing & <br /> Graphic Designing
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "normal",
                          fontSize: "21px",
                          textAlign: "justify",
                          px: "10px",
                          marginTop: "17px",
                          marginBottom: "20px",
                        }}
                      >
                        Digital Marketing promotes online, while Graphic
                        Designing crafts visual content.
                      </Typography>
                      <hr
                        style={{
                          border: "none",
                          borderTop: "4px solid #4CAF50",
                          width: "100%",
                          marginTop: "55px",
                        }}
                      />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
