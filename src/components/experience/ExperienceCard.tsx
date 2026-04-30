import React from 'react'
import Grid from '@mui/material/Grid'

export interface TechImage {
    imgSrc: string
    imgAlt: string
}

interface Props {
    imageArray: TechImage[]
}

const techImgStyle = {
    height: '37vh',
    width: '100%',
    objectFit: 'cover' as const,
    border: '2px solid #324a54',
    borderRadius: '3px'
}

// TODO: Dangerous use of hard-coding imageArray index in this component. Is there a way we can get around this?
const ExperienceCard = ({ imageArray }: Props) => {
    return(
        <>
            <Grid item xs={3} sx={{ mr: 3, ml: 3 }}>
                <img src={imageArray[0].imgSrc} alt={imageArray[0].imgAlt} style={techImgStyle} />
            </Grid>
            <Grid item xs={4} sx={{ mr: 3, ml: 3 }}>
                <img src={imageArray[1].imgSrc} alt={imageArray[1].imgAlt} style={techImgStyle} />
            </Grid>
            <Grid item xs={3} sx={{ mr: 3, ml: 3 }}>
                <img src={imageArray[2].imgSrc} alt={imageArray[2].imgAlt} style={techImgStyle} />
            </Grid>
        </>
    )
}

export default ExperienceCard
