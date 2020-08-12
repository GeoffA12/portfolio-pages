import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(({spacing}) => ({
    container: {
        marginTop: spacing(3),
    },
    profilePicture: {
        height: '80vh',
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
        height: 'auto',
        justifyContent: 'flex-start',
        alignItems: 'center',
        border: '1px solid orange'
    },
    flexCol: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid purple',
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
    }
}));

const Landing = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.container}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <div className={classes.imageContainer}>    
                            <img className={classes.profilePicture} 
                            src="http://images.pixieset.com/6157811/03c466fef5842318a6296a89d6020128-xlarge.jpg" 
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
                                {/* TODO: Link to the internships page here */}
                                <Typography className={classes.educationText}>
                                    Amazon SDE Internship
                                </Typography>
                                <Typography className={classes.educationText}>
                                    ESiMi UI/UX Design Internship
                                </Typography>
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
