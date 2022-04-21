import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ boxShadow: "none", borderBottom: "1px solid rgba(0,0,0,0.12)" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: "1",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
            }}
            color="inherit"
          >
            <img
              src="https://www.graphicsprings.com/filestorage/stencils/1cf0e62090ebd950855b702c81587979.png?width=500&height=500"
              alt="Commercejs"
              height="25px"
              sx={{ marginRight: "10px" }}
            />
            E-Commerce
          </Typography>
          <div sx={{ flexGrow: "1" }} />
          <div>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
