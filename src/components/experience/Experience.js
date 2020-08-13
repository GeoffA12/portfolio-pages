import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles(({spacing}) => ({
    aboutMeHeaderContainer: {
        marginTop: spacing(2),
    },
    aboutMeHeaderText: {
        fontSize: '2.6em',
        fontWeight: 'bold',
        marginLeft: spacing(3),
        marginBottom: spacing(2),
        paddding: spacing(2),
        fontFamily: 'Quicksand, sans-serif'
    },
    aboutMePaperContainer: {
        marginLeft: spacing(3),
        marginRight: spacing(3),
        background: '#324a54',
    },
    aboutMeJobTitle: {
        fontSize: '2em',
        padding: spacing(2),
        marginTop: spacing(1),
        fontFamily: 'Quicksand, sans-serif',
        color: 'rgb(192, 224, 237)'
    },
    aboutMeJobText: {
        fontSize: '1.3em',
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        marginTop: spacing(1),
        padding: spacing(2),
        lineHeight: '40px'
    },
    amazonLogo: {
        width: 'auto',
        height: '10vh',
        objectFit: 'cover',
        display: 'inline'
    },
    
    projectsContainer: {
        marginTop: spacing(4),
        marginBottom: spacing(2)
    },
    projectCardGrid: {
        marginRight: spacing(3),
        marginLeft: spacing(3)
    },
    projectRowContainer: {
        marginTop: spacing(2),
        marginBottom: spacing(2)
    }
}));

const Experience = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container direction="column">
                <Grid item xs className={classes.aboutMeHeaderContainer}>
                    <Typography className={classes.aboutMeHeaderText}>
                        Internship Experience
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Card className={classes.aboutMePaperContainer}>
                        <CardContent>
                            <Typography className={classes.aboutMeJobTitle}>
                                <img src="https://www.shareicon.net/data/2048x2048/2016/06/19/606232_amazon_4096x4096.png" alt="amazon logo" className={classes.amazonLogo} />
                                Amazon.com - Software Development Engineer Intern
                            </Typography>

                            <Typography className={classes.aboutMeJobText}>
                                Over the Summer of 2020 while at Amazon, a solid foundation of the software development lifecycle and service-oriented architecture was set in place. 
                                During my time at Amazon I designed, implemented, and tested an accommodations tool for Amazon fulfillment center associates to use upon workplace injury.
                                While building the accommodations API's, I was introduced to using a native AWS stack with DynamoDB, AWS API Gateway, and AWS AppSync to 
                                support my microservices and business logic. I also built an accommodations UI on my team's existing product. The UI components were built 
                                using React to support text internationalization, user profile integration, and responsive design. 
                            </Typography>
                            <Typography className={classes.aboutMeJobText}>
                                General understanding of good programming practice was developed through code review feedback from senior engineers on the team
                                who left comments on my pull requests. As part of the internship I also wrote a design document for 
                                senior engineers on the team to review. A transition document was written to help onboard other engineers into the 
                                accommodations problem I was solving, with high-level descriptions of the deliverables I produced and the CI/CD pipelines I affected.  
                            </Typography>
                            <Typography className={classes.aboutMeJobTitle}>
                            <img src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/kptprz3bd0alibati6j9" alt="esimi logo" className={classes.amazonLogo} />
                                ESiMi - UI/UX Design Intern
                            </Typography>
                            <Typography className={classes.aboutMeJobText}>
                                ESiMi is a startup building ambient-energy devices like bike lights which aren't powered by batteries but through the vibrations of the bike on the road.
                                Working for a clean-tech startup like ESiMi introduced me to a wide variety of technical roles.
                            </Typography>  
                            <Typography className={classes.aboutMeJobText}>
                                I helped bulid the startup logo design and social media profile headers on the ESiMi Facebook and Twitter accounts prior to our demo at CES 2018 in Las Vegas. 
                                Using Adobe Photoshop, I mocked UI landing and biography pages for the startup site and implemented a startup business card design and t-shirt.
                                Another project I worked on was filming and editing the company Shark Tank Audition video after our startup had made it to the second round of 
                                the Shark Tank audition process.   
                            </Typography>  
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs className={classes.projectsContainer}>
                    <Typography className={classes.aboutMeHeaderText}>
                        Personal Projects
                    </Typography>
                </Grid>
                
                <Grid container direction="row" className={classes.projectRowContainer}>

                        <Grid item xs={3} className={classes.projectCardGrid}>
                            <Card>
                                <CardContent>
                                    Item
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} className={classes.projectCardGrid}>
                            <Card>
                                <CardContent>
                                    Item
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} className={classes.projectCardGrid}>
                            <Card>
                                <CardContent>
                                    Item
                                </CardContent>
                            </Card>
                        </Grid>
                    
               </Grid>
            </Grid>
        </>
    );
};

export default Experience;
