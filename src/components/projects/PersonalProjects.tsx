import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  headerTextContainerSx,
  paperTextContainerSx,
  headerTextSx,
  paperTextSx,
} from '../../common/styles/SharedStyles';

const PersonalProjects = () => {
  return (
    <Grid container direction='column'>
      <Grid item xs sx={headerTextContainerSx}>
        <Typography sx={headerTextSx}>Personal Projects</Typography>
      </Grid>
      <Grid item xs sx={paperTextContainerSx}>
        <Typography sx={paperTextSx}>Coming soon.</Typography>
      </Grid>
    </Grid>
  );
};

export default PersonalProjects;
