import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';
import { sharedStyles } from '../../common/styles/SharedStyles';
import CardRow from './CardRow';

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

    const projectImageData = [
        {
            imgSrc: 'https://res.cloudinary.com/geoffj7/image/upload/v1562230466/ProductLandingPage2_clei1m.jpg',
            imgAlt: 'Product landing page preview',
            link: 'https://codepen.io/geoff-arroyo/full/WBJNvb',
            text: 'Product Landing Page'
        },
        {
            imgSrc: 'https://res.cloudinary.com/geoffj7/image/upload/v1562230522/TechnicalDocumentation2_ocfu6a.jpg',
            imgAlt: 'Tech doc preview',
            link: 'https://codepen.io/geoff-arroyo/full/zQyeoz',
            text: 'Technical Documentation Page'
        },
        {
            imgSrc: 'https://res.cloudinary.com/geoffj7/image/upload/v1562230522/TributePage2_ju5a7m.jpg',
            imgAlt: 'Tribute Page Preview',
            link: 'https://codepen.io/candy4all-432/full/rgwzYJ',
            text: 'Tribute Page'
        },
        {
            imgSrc: 'https://res.cloudinary.com/geoffj7/image/upload/v1569214669/researchPreview_wyxf3e.jpg',
            imgAlt: 'Research article preview',
            link: 'https://www.researchgate.net/publication/333005159_Pair_Programming_in_the_Classroom_How_can_collaborative_exercises_be_further_extended_into_educational_environments',
            text: 'Research Article'
        },
        {
            imgSrc: 'https://res.cloudinary.com/geoffj7/image/upload/v1562230521/EsimiLogo1_ewnbjv.jpg',
            imgAlt: 'ESiMi logo',
            link: 'https://www.youtube.com/watch?v=QHPxbUbtfiY&feature=youtu.be',
            text: 'ESiMi Shark Tank Audition Video'
        }
    ];

    const experienceImageData = [
        {
            imgSrc: 'https://i.imgur.com/WS2N5Gx.png',
            imgAlt: 'Git logo'
        },
        {
            imgSrc: 'https://i.imgur.com/8VH4cGr.jpg',
            imgAlt: 'AWS logo'
        },
        {
            imgSrc: 'https://i.imgur.com/ZKkBc1J.jpg',
            imgAlt: 'Java logo'
        },
        {
            imgSrc: 'https://i.imgur.com/2iTXiCh.png',
            imgAlt: 'React logo'
        },
        {
            imgSrc: 'https://i.imgur.com/Qkq7mco.png',
            imgAlt: 'Kotlin logo'
        },
        {
            imgSrc: 'https://i.imgur.com/6GPW3sG.jpg',
            imgAlt: 'MongoDB logo'
        },
        {
            imgSrc: 'https://i.imgur.com/IQE5DJA.png',
            imgAlt: 'Docker logo'
        },
        {
            imgSrc: 'https://i.imgur.com/e8Bvv9E.png',
            imgAlt: 'Java spring logo'
        },
        {
            imgSrc: 'https://i.imgur.com/TOnpZc9.png',
            imgAlt: 'MySQL logo'
        }
    ];

    function normalizeProjectImageData(arr) {
        let nestedImageData = [];
        let nestedImageCounter = -1;
        for (let x = 0; x < arr.length; ++x) {
            if (x % 3 === 0) {
                nestedImageData.push([]);
                nestedImageCounter++;
            }
            nestedImageData[nestedImageCounter].push(arr[x]);
        }
        console.log(nestedImageData);
        return nestedImageData;
    }

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
                            {/* TODO: Add in more specific details on tech stack that was used, languages, lines of code, deployment to AWS regions */}
                            <Typography className={sharedClasses.paperText}>
                                Over the Summer of 2020 while at Amazon, a solid foundation of the software development lifecycle and service-oriented architecture was set in place. 
                                I designed, implemented, and tested an accommodations tool for Amazon fulfillment center associates to use upon workplace injury.
                                I built accommodations API's by using Kotlin data classes and an infrastructure including but not limited to Amazon DynamoDB, AWS API Gateway, and AWS AppSync.
                                I built UI components for my intern project using React.js to support text internationalization, user profile integration, and responsive design. 
                            </Typography>
                            <Typography className={sharedClasses.paperText}>
                                Good programming practice was developed through code review feedback from senior engineers on the team
                                who left comments on my pull requests. Over 5000 lines of code were approved by senior engineers during the development process of this internship. 
                                The intern project I worked was deployed to multiple AWS regions in Asia, Europe, and North America.    
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

                <CardRow 
                    nestedImageArray={normalizeProjectImageData(projectImageData)}
                    cardType={'Project'}
                />

                {/* TODO: Add CRWN-clothing react project once it's cleaned up and looking good, or other FCC react projects */}
                <Grid item xs className={sharedClasses.headerTextContainer}>
                    <Typography className={sharedClasses.headerText}>
                        Most familiar programming languages and technologies
                    </Typography>
                </Grid>

               <CardRow
                    nestedImageArray={normalizeProjectImageData(experienceImageData)}
                    cardType={'Experience'}
                />
            
            </Grid>
        </>
    );
};

export default Experience;
