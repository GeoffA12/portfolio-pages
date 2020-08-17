import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';
import { sharedStyles } from '../../common/styles/SharedStyles';

const useStyles = makeStyles(({spacing}) => ({
    experienceJobTitle: {
        fontSize: '2em',
        padding: spacing(2),
        marginTop: spacing(1),
        fontFamily: 'Quicksand, sans-serif',
        color: 'rgb(192, 224, 237)'
    },
    amazonLogo: {
        width: 'auto',
        height: '10vh',
        objectFit: 'cover',
        display: 'inline'
    },
    
    projectCardGrid: {
        marginRight: spacing(3),
        marginLeft: spacing(3),
    },
    projectRowContainer: {
        marginTop: spacing(2),
        marginBottom: spacing(2)
    },
    cardContainer: {
        height: '60vh',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        background: '#324a54'
    },
    projectImgStyle: {
        height: '46vh',
        width: '100%',
        objectFit: 'cover'
    },
    captionContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    techImgStyle: {
        height: '37vh',
        width: '100%',
        objectFit: 'cover',
        border: '2px solid #324a54',
        borderRadius: '3px'
    }
}));

const Experience = () => {
    const classes = useStyles();
    const sharedClasses = sharedStyles();
    return (
        <>
            <Grid container direction="column">
                <Grid item xs className={sharedClasses.headerTextContainer}>
                    <Typography className={sharedClasses.headerText}>
                        Experience
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Card className={sharedClasses.paperTextContainer}>
                        <CardContent>
                            <Typography className={classes.experienceJobTitle}>
                                <img src="https://www.shareicon.net/data/2048x2048/2016/06/19/606232_amazon_4096x4096.png" alt="amazon logo" className={classes.amazonLogo} />
                                Amazon.com - Software Development Engineer Intern
                            </Typography>

                            <Typography className={sharedClasses.paperText}>
                                Over the Summer of 2020 while at Amazon, a solid foundation of the software development lifecycle and service-oriented architecture was set in place. 
                                During my time at Amazon I designed, implemented, and tested an accommodations tool for Amazon fulfillment center associates to use upon workplace injury.
                                While building the accommodations API's, I was introduced to using a native AWS stack with DynamoDB, AWS API Gateway, and AWS AppSync to 
                                support my microservices and business logic. I also built an accommodations UI on my team's existing product. The UI components were built 
                                using React to support text internationalization, user profile integration, and responsive design. 
                            </Typography>
                            <Typography className={sharedClasses.paperText}>
                                General understanding of good programming practice was developed through code review feedback from senior engineers on the team
                                who left comments on my pull requests. As part of the internship I also wrote a design document for 
                                senior engineers on the team to review. A transition document was written to help onboard other engineers into the 
                                accommodations problem I was solving, with high-level descriptions of the deliverables I produced and the CI/CD pipelines I affected.  
                            </Typography>
                            <Typography className={classes.experienceJobTitle}>
                            <img src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/kptprz3bd0alibati6j9" alt="esimi logo" className={classes.amazonLogo} />
                                ESiMi - UI/UX Design Intern
                            </Typography>
                            <Typography className={sharedClasses.paperText}>
                                ESiMi is a startup building ambient-energy devices like bike lights which aren't powered by batteries but through the vibrations of the bike on the road.
                                Working for a clean-tech startup like ESiMi introduced me to a wide variety of technical roles.
                            </Typography>  
                            <Typography className={sharedClasses.paperText}>
                                I helped bulid the startup logo design and social media profile headers on the ESiMi Facebook and Twitter accounts prior to our demo at CES 2018 in Las Vegas. 
                                Using Adobe Photoshop, I mocked UI landing and biography pages for the startup site and implemented a startup business card design and t-shirt.
                                Another project I worked on was filming and editing the company Shark Tank Audition video after our startup had made it to the second round of 
                                the Shark Tank audition process.   
                            </Typography>  
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs className={sharedClasses.headerTextContainer}>
                    <Typography className={sharedClasses.headerText}>
                        Personal Projects
                    </Typography>
                </Grid>
                
                {/* TODO: Can create a component for this, pass in the image URL, alt tag, and caption text as props.*/}
                <Grid container direction="row" className={classes.projectRowContainer}>

                    <Grid item xs={3} className={classes.projectCardGrid}>
                        <Card className={classes.cardContainer}>
                            <CardContent>
                                <a href="https://codepen.io/geoff-arroyo/full/WBJNvb" target="_blank" rel="noopener noreferrer">
                                    <img src='https://res.cloudinary.com/geoffj7/image/upload/v1562230466/ProductLandingPage2_clei1m.jpg' alt="Product landing page preview" className={classes.projectImgStyle} />
                                    <div className={classes.captionContainer}>
                                        <Typography className={sharedClasses.paperText}>
                                            Product Landing Page
                                        </Typography>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} className={classes.projectCardGrid}>
                        <Card className={classes.cardContainer}>
                            <CardContent>
                                <a href="https://codepen.io/geoff-arroyo/full/zQyeoz" target="_blank" rel="noopener noreferrer">
                                    <img src="https://res.cloudinary.com/geoffj7/image/upload/v1562230522/TechnicalDocumentation2_ocfu6a.jpg" alt="Tech doc preview" className={classes.projectImgStyle} />
                                        <div className={classes.captionContainer}>
                                            <Typography className={sharedClasses.paperText}>
                                                Technical Documentation Page
                                            </Typography>
                                        </div>
                                </a>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} className={classes.projectCardGrid}>
                        <Card className={classes.cardContainer}>
                            <CardContent>
                                <a href="https://codepen.io/candy4all-432/full/rgwzYJ" target="_blank" rel="noopener noreferrer">
                                    <img src='https://res.cloudinary.com/geoffj7/image/upload/v1562230522/TributePage2_ju5a7m.jpg' alt="Tribute page preview" className={classes.projectImgStyle} />
                                            <div className={classes.captionContainer}>
                                                <Typography className={sharedClasses.paperText}>
                                                    Tribute Page
                                                </Typography>
                                            </div>
                                </a>
                            </CardContent>
                        </Card>
                    </Grid>
                    
               </Grid>
               <Grid container direction="row" className={classes.projectRowContainer}>
                    <Grid item xs={3} className={classes.projectCardGrid}>
                        <Card className={classes.cardContainer}>
                            <CardContent>
                                <a href="https://www.researchgate.net/publication/333005159_Pair_Programming_in_the_Classroom_How_can_collaborative_exercises_be_further_extended_into_educational_environments" target="_blank" rel="noopener noreferrer">
                                    <img src="https://res.cloudinary.com/geoffj7/image/upload/v1569214669/researchPreview_wyxf3e.jpg" alt="Research article preview" className={classes.projectImgStyle} />
                                    <div className={classes.captionContainer}>
                                        <Typography className={sharedClasses.paperText}>
                                            Research Article
                                        </Typography>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} className={classes.projectCardGrid}>
                        <Card className={classes.cardContainer}>
                            <CardContent>
                                <a href="https://www.youtube.com/watch?v=QHPxbUbtfiY&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                                    <img src='https://res.cloudinary.com/geoffj7/image/upload/v1562230521/EsimiLogo1_ewnbjv.jpg' alt="ESiMi logo" className={classes.projectImgStyle} />
                                    <div className={classes.captionContainer}>
                                        <Typography className={sharedClasses.paperText}>
                                            ESiMi Shark Tank Audition
                                        </Typography>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* TODO: Add CRWN-clothing react project once it's cleaned up and looking good, or other FCC react projects */}
                </Grid>
                <Grid item xs className={sharedClasses.headerTextContainer}>
                    <Typography className={sharedClasses.headerText}>
                        Most familiar programming languages and technologies
                    </Typography>
                    
                </Grid>
                {/* TODO: Just repeating code over and over, should be able to create a row component using same forumla as TODO above*/}
                <Grid container direction="row" className={classes.projectRowContainer}>
                    <Grid item xs={3} className={classes.projectCardGrid}>
                        <img src='https://i.imgur.com/WS2N5Gx.png' alt="Git logo" className={classes.techImgStyle} />     
                    </Grid>
                    <Grid item xs={4} className={classes.projectCardGrid}>
                        <img src='https://i.imgur.com/8VH4cGr.jpg' alt="AWS logo" className={classes.techImgStyle} />     
                    </Grid>
                    <Grid item xs={3} className={classes.projectCardGrid}>
                        <img src='https://i.imgur.com/ZKkBc1J.jpg' alt="AWS logo" className={classes.techImgStyle} />     
                    </Grid>
                </Grid>

                <Grid container direction="row" className={classes.projectRowContainer}>
                    <Grid item xs={3} className={classes.projectCardGrid}>
                        <img src='https://i.imgur.com/2iTXiCh.png' alt="AWS logo" className={classes.techImgStyle} />     
                    </Grid>
                    <Grid item xs={4} className={classes.projectCardGrid}>
                        <img src='https://i.imgur.com/Qkq7mco.png' alt="AWS logo" className={classes.techImgStyle} />     
                    </Grid>
                    <Grid item xs={3} className={classes.projectCardGrid}>
                        <img src='https://i.imgur.com/6GPW3sG.jpg' alt="AWS logo" className={classes.techImgStyle} />     
                    </Grid>
                </Grid>

                <Grid container direction="row" className={classes.projectRowContainer}>
                    <Grid item xs={3} className={classes.projectCardGrid}>
                        <img src='https://i.imgur.com/IQE5DJA.png' alt="AWS logo" className={classes.techImgStyle} />     
                    </Grid>
                    <Grid item xs={4} className={classes.projectCardGrid}>
                        <img src='https://i.imgur.com/e8Bvv9E.png' alt="AWS logo" className={classes.techImgStyle} />     
                    </Grid>
                    <Grid item xs={3} className={classes.projectCardGrid}>
                        <img src='https://i.imgur.com/TOnpZc9.png' alt="AWS logo" className={classes.techImgStyle} />     
                    </Grid>
                </Grid>
            
            </Grid>
        </>
    );
};

export default Experience;
