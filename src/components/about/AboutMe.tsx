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
              I&apos;m a rising senior at St. Edward&apos;s University where
              I&apos;m majoring in Computer Science. I consider myself a
              full-stack developer because I enjoy any technical challenge –
              both visual and non-visual. What I love most about software
              development is working in agile scrum teams to iteratively deliver
              products aligned to fulfill customer needs and meet business
              requirements.
            </Typography>
            <Typography sx={paperTextSx}>
              Outside of school I help organize a weekly &quot;Cracking the
              Coding&quot; meetup group that helps prospective software
              developers prepare for their technical interviews. In my free time
              I enjoy PC gaming, writing music, and spending time with friends
              and family. I&apos;m also a big fan of sports and enjoy watching
              the English Premier League and NFL every year.
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
