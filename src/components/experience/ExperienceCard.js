import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({spacing}) => ({
    projectCardGrid: {
        marginRight: spacing(3),
        marginLeft: spacing(3),
    },
    techImgStyle: {
        height: '37vh',
        width: '100%',
        objectFit: 'cover',
        border: '2px solid #324a54',
        borderRadius: '3px'
    }
}));

// TODO: Dangerous use of hard-coding imageArray index in this component. Is there a way we can get around this? 
const ExperienceCard = ({ imageArray }) => {
    const classes = useStyles();
    return(
        <>
            <Grid item xs={3} className={classes.projectCardGrid}>
                <img src={imageArray[0].imgSrc} alt={imageArray[0].imgAlt} className={classes.techImgStyle} />     
            </Grid>
            <Grid item xs={4} className={classes.projectCardGrid}>
                <img src={imageArray[1].imgSrc} alt={imageArray[1].imgAlt} className={classes.techImgStyle} />     
            </Grid>
            <Grid item xs={3} className={classes.projectCardGrid}>
                <img src={imageArray[2].imgSrc} alt={imageArray[2].imgAlt} className={classes.techImgStyle} />     
            </Grid>   
        </>
    );
}

ExperienceCard.propTypes = {
    imageArray: PropTypes.array.isRequired
};

export default ExperienceCard;
