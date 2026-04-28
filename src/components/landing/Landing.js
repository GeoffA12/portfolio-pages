import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GithubIcon from '@mui/icons-material/GitHub';

const Landing = () => {
    return (
        <>
            <Grid container sx={{ mt: 4 }}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Paper>
                        <div style={{ position: 'relative' }}>
                            <img
                                style={{ height: '90vh', width: '100%', objectFit: 'cover' }}
                                src="https://i.imgur.com/2pZ7U4A.jpg"
                                alt="Geoff Arroyo Profile"
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                backgroundColor: '#324a54',
                                padding: '16px',
                                borderRadius: '5px'
                            }}>
                                <Typography sx={{ textAlign: 'center', fontSize: '2em', color: 'white' }}>
                                    Geoff Arroyo
                                </Typography>
                                <Typography sx={{ textAlign: 'center', fontSize: '1.2em', color: 'white' }}>
                                    Austin, TX
                                </Typography>
                            </div>
                        </div>

                        <div style={{ height: '20vh', display: 'flex' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Typography sx={{ display: 'flex', fontSize: '1.1em', color: 'black', textAlign: 'center' }}>
                                    Education:
                                </Typography>
                                <Typography sx={{ fontSize: '.8em', color: 'black', textAlign: 'center' }}>
                                    St. Edward's University Computer Science
                                </Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Typography sx={{ display: 'flex', fontSize: '1.1em', color: 'black', textAlign: 'center' }}>
                                    Experience:
                                </Typography>
                                <Typography sx={{ fontSize: '.8em', color: 'black', textAlign: 'center' }}>
                                    Amazon SDE Internship
                                </Typography>
                                <Typography sx={{ fontSize: '.8em', color: 'black', textAlign: 'center' }}>
                                    ESiMi UI/UX Design Internship
                                </Typography>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '16px', marginRight: '80px', marginLeft: '80px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <IconButton color="inherit">
                                    <a href="https://github.com/GeoffA12" target="_blank" rel="noopener noreferrer">
                                        <GithubIcon sx={{ height: '5vh', minWidth: '5vw', mb: 1 }} />
                                    </a>
                                </IconButton>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <IconButton color="inherit">
                                    <a href="https://www.linkedin.com/in/geoff-arroyo-4159ab1b1/" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon sx={{ height: '5.5vh', minWidth: '5.5vw', color: '#0e76a8', mb: 1 }} />
                                    </a>
                                </IconButton>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <IconButton color="inherit">
                                    <a href="https://www.facebook.com/geoff.arroyo" target="_blank" rel="noopener noreferrer">
                                        <FacebookIcon sx={{ height: '5vh', minWidth: '5vw', color: '#3b5998', mb: 1 }} />
                                    </a>
                                </IconButton>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </>
    );
};

export default Landing;
