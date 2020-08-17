import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { sharedStyles } from '../../common/styles/SharedStyles';

const useStyles = makeStyles(({spacing}) => ({
    aboutMeSubtitle: {
        fontSize: '1.6em',
        padding: spacing(2),
        fontFamily: 'Quicksand, sans-serif',
        color: '324a54',
        textAlign: 'center'
    },
    aboutMeTitle: {
        fontSize: '3em',
        color: '#324a54',
        textAlign: 'center',
        fontFamily: 'Quicksand, sans-serif',
        padding: spacing(2)
    },
    conferencePictureStyle: {
        height: '80vh',
        width: '100%',
        padding: spacing(2),
        objectFit: 'cover'
    },
    conferencePictureContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const AboutMe = () => {
    const classes = useStyles();
    const sharedClasses = sharedStyles();
    return (
        <>
            <Grid container>
                <Grid item xs={12} className={sharedClasses.headerTextContainer}>
                    <Typography className={classes.aboutMeTitle}>
                        Hi, I'm Geoff
                    </Typography>
                    <Typography className={classes.aboutMeSubtitle}>
                        A Software Developer
                    </Typography>
                </Grid>

                <Grid container className={sharedClasses.paperTextContainer}>
                    <Grid item xs={6}>
                        <Typography className={sharedClasses.paperText}>
                            I'm a rising senior at St. Edward’s University where I’m majoring in Computer Science.
                            I consider myself a full-stack developer because I enjoy any technical challenge – both visual and non-visual. 
                            What I love most about software development is working in agile scrum teams to iteratively deliver
                            products aligned to fulfill customer needs and meet business requirements.
                        </Typography>
                        <Typography className={sharedClasses.paperText}>
                            Outside of school I help organize a weekly “Cracking the Coding” meetup group that helps prospective software developers prepare 
                            for their technical interviews. In my free time I enjoy PC gaming, writing music, and spending time 
                            with friends and family. I'm also a big fan of sports and enjoy watching the English Premier League and NFL every year.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>        
                        <div className={classes.conferencePictureContainer}>
                            <img src="https://i.imgur.com/tWerMWb.jpg" alt="Geoff at CES" className={classes.conferencePictureStyle} />
                        </div>
                    </Grid>    
                </Grid>
            </Grid>
        </>
    );
};

export default AboutMe;
