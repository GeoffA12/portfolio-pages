import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(({spacing}) => ({
    container: {
        marginTop: spacing(4)
    },
    profilePicture: {
        height: '90vh',
        width: '100%',
        objectFit: 'cover'
    },
    imageContainer: {
        position: 'relative'
    },
    imageTextBox: {
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#324a54',
        padding: spacing(2),
        borderRadius: '5px'
    },
    imageNameText: {
        textAlign: 'center',
        fontSize: '2em',
        color: 'white'
    },
    imageLocationText: {
        textAlign: 'center',
        fontSize: '1.2em',
        color: 'white'
    },
    captionContainer: {
        height: '20vh',
        display: 'flex'
    },
    flexRow: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: spacing(2),
        marginRight: spacing(10),
        marginLeft: spacing(10)
    },
    flexCol: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    educationText: {
        fontSize: '.8em',
        color: 'black',
        textAlign: 'center'
    },
    educationTextHeader: {
        display: 'flex',
        fontSize: '1.1em',
        color: 'black',
        fontStyle: 'bold',
        textAlign: 'center'
    },
    // TODO: Figure out how to use proper CSS inheritance so we that we don't duplicate CSS rules in multiple classes
    icons: {
        height: '5vh',
        minWidth: '5vw',
        marginBottom: spacing(1)
    },
    facebook: {
        height: '5vh',
        minWidth: '5vw',
        color: '#3b5998',
        marginBottom: spacing(1)
    },
    linkedin: {
        height: '5.5vh',
        minWidth: '5.5vw',
        color: '#0e76a8',
        marginBottom: spacing(1)
    }
}));

const Landing = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.container}>
            {/* TODO: This isn't reponsive. Either add a media query or find a way to remove the filler grids. 
            Could also use a library like this to help us out eventually with the responsive diffs to this */}
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <div className={classes.imageContainer}>    
                            <img className={classes.profilePicture} 
                            src="https://i.imgur.com/2pZ7U4A.jpg" 
                            alt="Geoff Arroyo Profile" />

                            <div className={classes.imageTextBox}>
                                <Typography className={classes.imageNameText}>
                                    Geoff Arroyo
                                </Typography>
                            
                                <Typography className={classes.imageLocationText}>
                                    Austin, TX
                                </Typography>
                            </div>
                        </div>    
                        <div className={classes.captionContainer}>
                            <div className={classes.flexCol}>
                                <Typography className={classes.educationTextHeader}>
                                    Education:
                                </Typography>
                                <Typography className={classes.educationText}>
                                    St. Edward's University Computer Science
                                </Typography>
                            </div>
                            <div className={classes.flexCol}>
                                <Typography className={classes.educationTextHeader}>
                                    Experience:
                                </Typography>
                                {/* TODO: Link to the internships page here? */}
                                <Typography className={classes.educationText}>
                                    Amazon SDE Internship
                                </Typography>
                                <Typography className={classes.educationText}>
                                    ESiMi UI/UX Design Internship
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.flexRow}>
                             {/* TODO: Map over an array of objects containing the a href link and style text, then render a div for each array element */}
                            <div className={classes.flexCol}>
                                <IconButton color="inherit">
                                    <a href="https://github.com/GeoffA12" target="_blank" rel="noopener noreferrer">
                                        <GithubIcon className={classes.icons} />
                                    </a>
                                </IconButton>      
                            </div>
                            <div className={classes.flexCol}>
                                <IconButton color="inherit">
                                    <a href="https://www.linkedin.com/in/geoff-arroyo-4159ab1b1/" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon className={classes.linkedin} />
                                    </a>
                                </IconButton>   
                            </div>
                            <div className={classes.flexCol}>
                                <IconButton color="inherit">
                                    <a href="https://www.facebook.com/geoff.arroyo" target="_blank" rel="noopener noreferrer">
                                        <FacebookIcon className={classes.facebook} />
                                    </a>
                                </IconButton>
                            </div>
                        
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
        </>
    );
};



export default Landing;
