import { Grid } from "@mui/material"
import headphone from "../../../../assets/Techovise/headphone.png"


function Section() {
  return (
    <div>
      <Grid>
        <Grid item xs={10} md={5}>
            <img src={headphone} alt="" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Section
