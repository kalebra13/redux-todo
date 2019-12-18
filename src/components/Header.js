import React, { Component } from "react";
import { Checkbox } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

class Header extends Component {
  render() {
    return (
      <Grid container>
        <Grid item lg={8}>
          <Box display="flex" alignItems="center">
            To-Do List
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box display="flex" alignItems="center">
            <Checkbox color="default"></Checkbox>
            <Box component="span" className="showDoneLabel">
              Show done
            </Box>
            <Input margin="dense" placeholder="Search to-do..."></Input>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
