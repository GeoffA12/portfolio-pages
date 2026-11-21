import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  headerTextContainerSx,
  paperTextContainerSx,
  paperTextSx,
} from '../../common/styles/SharedStyles';

const AboutMe = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={headerTextContainerSx}>
          <Typography
            sx={{
              fontSize: '3em',
              color: '#324a54',
              textAlign: 'center',
              fontFamily: 'Quicksand, sans-serif',
              p: 2,
            }}
          >
            Hi, I&apos;m Geoff
          </Typography>
          <Typography
            sx={{
              fontSize: '1.6em',
              p: 2,
              fontFamily: 'Quicksand, sans-serif',
              color: '#324a54',
              textAlign: 'center',
            }}
          >
            A Software Developer
          </Typography>
        </Grid>

        <Grid container sx={paperTextContainerSx}>
          <Grid item xs={6}>
            <Typography sx={paperTextSx}>
              I&apos;m a Software Development Engineer at Ito.ai, and previously
              an SDE II at Amazon. I focus on distributed systems, cloud
              architecture, AI-driven automation, operational excellence, and
              mentoring engineers — shipping reliable services and helping teams
              grow.
            </Typography>
            <Typography sx={paperTextSx}>
              I earned a B.S. in Computer Science from St. Edward&apos;s
              University (Class of 2021), graduating with a 4.0 GPA as
              Co-Valedictorian and Outstanding Computer Science Graduate. In my
              free time I enjoy PC gaming, writing music, spending time with
              friends and family, and sports — especially the English Premier
              League and the NFL.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src='https://i.imgur.com/tWerMWb.jpg'
                alt='Geoff at CES'
                style={{
                  height: '80vh',
                  width: '100%',
                  padding: '16px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMe;
