import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { headerTextContainerSx, paperTextContainerSx, headerTextSx, paperTextSx } from '../../common/styles/SharedStyles'
import CardRow from './CardRow'
import type { ProjectImage } from './ProjectCard'
import type { TechImage } from './ExperienceCard'

function normalizeImageData<T>(arr: T[]): T[][] {
    const nestedImageData: T[][] = []
    let nestedImageCounter = -1
    for (let x = 0; x < arr.length; ++x) {
        if (x % 3 === 0) {
            nestedImageData.push([])
            nestedImageCounter++
        }
        nestedImageData[nestedImageCounter].push(arr[x])
    }
    return nestedImageData
}

const Experience = () => {
    const projectImageData: ProjectImage[] = [
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
    ]

    const experienceImageData: TechImage[] = [
        { imgSrc: 'https://i.imgur.com/WS2N5Gx.png', imgAlt: 'Git logo' },
        { imgSrc: 'https://i.imgur.com/8VH4cGr.jpg', imgAlt: 'AWS logo' },
        { imgSrc: 'https://i.imgur.com/ZKkBc1J.jpg', imgAlt: 'Java logo' },
        { imgSrc: 'https://i.imgur.com/2iTXiCh.png', imgAlt: 'React logo' },
        { imgSrc: 'https://i.imgur.com/Qkq7mco.png', imgAlt: 'Kotlin logo' },
        { imgSrc: 'https://i.imgur.com/6GPW3sG.jpg', imgAlt: 'MongoDB logo' },
        { imgSrc: 'https://i.imgur.com/IQE5DJA.png', imgAlt: 'Docker logo' },
        { imgSrc: 'https://i.imgur.com/e8Bvv9E.png', imgAlt: 'Java spring logo' },
        { imgSrc: 'https://i.imgur.com/TOnpZc9.png', imgAlt: 'MySQL logo' }
    ]

    return (
        <>
            <Grid container direction="column">
                <Grid item xs sx={headerTextContainerSx}>
                    <Typography sx={headerTextSx}>
                        Experience
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Card sx={paperTextContainerSx}>
                        <CardContent>
                            <Typography sx={{ fontSize: '2em', p: 2, mt: 1, fontFamily: 'Quicksand, sans-serif', color: 'rgb(192, 224, 237)' }}>
                                <img src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" alt="amazon logo" style={{ width: 'auto', height: '10vh', objectFit: 'cover', display: 'inline' }} />
                                Amazon.com - Software Development Engineer Intern
                            </Typography>
                            <Typography sx={paperTextSx}>
                                Over the Summer of 2020 while at Amazon, a solid foundation of the software development lifecycle and service-oriented architecture was set in place.
                                I designed, implemented, and tested an accommodations tool for Amazon fulfillment center associates to use upon workplace injury.
                                I built accommodations API's by using Kotlin data classes and an infrastructure including but not limited to Amazon DynamoDB, AWS API Gateway, and AWS AppSync.
                                I built UI components for my intern project using React.js to support text internationalization, user profile integration, and responsive design.
                            </Typography>
                            <Typography sx={paperTextSx}>
                                Good programming practice was developed through code review feedback from senior engineers on the team
                                who left comments on my pull requests. Over 5000 lines of code were approved by senior engineers during the development process of this internship.
                                The intern project I worked was deployed to multiple AWS regions in Asia, Europe, and North America.
                            </Typography>
                            <Typography sx={{ fontSize: '2em', p: 2, mt: 1, fontFamily: 'Quicksand, sans-serif', color: 'rgb(192, 224, 237)' }}>
                                <img src="https://images.crunchbase.com/image/upload/c_pad,h_160,w_160,f_auto,b_white,q_auto:eco,dpr_2/kptprz3bd0alibati6j9?ik-sanitizeSvg=true" alt="esimi logo" style={{ width: 'auto', height: '10vh', objectFit: 'cover', display: 'inline' }} />
                                ESiMi - UI/UX Design Intern
                            </Typography>
                            <Typography sx={paperTextSx}>
                                ESiMi is a startup building ambient-energy devices like bike lights which aren't powered by batteries but through the vibrations of the bike on the road.
                                Working for a clean-tech startup like ESiMi introduced me to a wide variety of technical roles.
                            </Typography>
                            <Typography sx={paperTextSx}>
                                I helped bulid the startup logo design and social media profile headers on the ESiMi Facebook and Twitter accounts prior to our demo at CES 2018 in Las Vegas.
                                Using Adobe Photoshop, I mocked UI landing and biography pages for the startup site and implemented a startup business card design and t-shirt.
                                Another project I worked on was filming and editing the company Shark Tank Audition video after our startup had made it to the second round of
                                the Shark Tank audition process.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs sx={headerTextContainerSx}>
                    <Typography sx={headerTextSx}>
                        Personal Projects
                    </Typography>
                </Grid>

                <CardRow
                    nestedImageArray={normalizeImageData(projectImageData)}
                    cardType={'Project'}
                />

                <Grid item xs sx={headerTextContainerSx}>
                    <Typography sx={headerTextSx}>
                        Most familiar programming languages and technologies
                    </Typography>
                </Grid>

                <CardRow
                    nestedImageArray={normalizeImageData(experienceImageData)}
                    cardType={'Experience'}
                />
            </Grid>
        </>
    )
}

export default Experience
