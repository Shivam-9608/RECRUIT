import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../../../assets/TechoviseWhiteLogo.png";
import { Button, Grid,  } from "@mui/material";

export default function Header() {
  // State for Drawer open/close
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Check screen size
  const isMobileOrMediumScreen = useMediaQuery("(max-width:1200px)"); // For small and medium screens

  // Function to toggle Drawer
  const toggleDrawer = (isOpen: boolean) => {
    setDrawerOpen(isOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#00876D" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <img className="img" src={logo} alt="Logo" height={"110"} />

          {isMobileOrMediumScreen ? (
            <>
              {/* Hamburger Menu */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              {/* Drawer Component */}
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={() => toggleDrawer(false)}
                  onKeyDown={() => toggleDrawer(false)}
                >
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="EVENT" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="BLOG" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="SIGN UP" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            // For large screens: Display "Home" on the right side
            <Grid sx={{ justifyContent: "end" }}>
              <Button sx={{ color: "white" }}>EVENT</Button>
              <Button variant="text" sx={{ color: "white" }}>BLOG</Button>
              <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>Sign Up</Button>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
