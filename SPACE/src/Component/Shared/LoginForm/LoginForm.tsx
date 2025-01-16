import { Box, Grid, Typography } from "@mui/material";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import larka from "../../../assets/Techovise/boy.png";


import "./LoginForm.css";

function LoginForm() {
  const { focused } = useFormControl() || {};

  if (focused) {
    return "";
  }
}
export default function UseFormControl() {
  return (
    <>
      <Grid className="box1 box-shadow">
        <Box sx={{ marginTop: -11, marginLeft: -32 }}>
          <img src={larka} alt="" />
        </Box>
        <form noValidate autoComplete="off">
          <Grid className="login">Login To Your Account</Grid>
          <Grid className="login1">
            <FormControl sx={{ width: "35ch" }}>
              <Grid container justifyContent={"start"}>
                <label className="email" htmlFor="Email">
                  Email id
                </label>
              </Grid>
              <OutlinedInput
                placeholder="ex.rohan.mrith@gmail.com"
                className="id"
              />
              <LoginForm />
              <br />
              <Grid container textAlign={"start"}>
                <Grid item md={6} sm={12}>
                  <label>Password</label>
                </Grid>
                <Grid container justifyContent={"end"} item md={6} sm={12}>
                  <a className="Forgate" href="#">
                    Forgot Password ?
                  </a>
                </Grid>
              </Grid>
              <OutlinedInput placeholder="Password here" />
              <LoginForm />
            </FormControl>
            <Grid className="btn">
              <button className="LOGIN">LOGIN</button>
            </Grid>
           

            <Typography className="dont">
              Don’t have an account ?
              <span>
                {" "}
                <a className=" Register" href="#">
                  Register
                </a>
              </span>
            </Typography>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
