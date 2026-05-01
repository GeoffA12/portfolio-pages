import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import MenuButton from './MenuButton';

const PrimaryAppBar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={false}>
              <MenuButton />
            </Grid>
            <Grid item xs={false}>
              <Link to='/'>
                <IconButton sx={{ color: 'white' }}>
                  <HomeIcon />
                </IconButton>
              </Link>
            </Grid>
            <Grid item xs={9}></Grid>
            <Grid item xs={1}>
              <Typography sx={{ mt: 1.5, mr: 'auto' }}>
                Geoffarroyo@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PrimaryAppBar;
