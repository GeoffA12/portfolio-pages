import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';
import ExperienceCard from './ExperienceCard';


const useStyles = makeStyles(({spacing}) => ({
    projectRowContainer: {
        marginTop: spacing(2),
        marginBottom: spacing(2)
    }
}));

const CardRow = ({ nestedImageArray, cardType }) => {
    const classes = useStyles();

    return(
        nestedImageArray.map((itemArray) => 
            <Grid container direction="row" className={classes.projectRowContainer}>
                {cardType === 'Project' ? itemArray.map((item) =>
                    <ProjectCard image={item} />
                ) : 
                    <ExperienceCard imageArray={itemArray} />
                }
            </Grid>
    ));
};

CardRow.propTypes = {
    nestedImageArray: PropTypes.array.isRequired,
    cardType: PropTypes.string.isRequired
}

export default CardRow;
