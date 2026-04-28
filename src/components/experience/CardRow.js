import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import ExperienceCard from './ExperienceCard';

const CardRow = ({ nestedImageArray, cardType }) => {
    return(
        nestedImageArray.map((itemArray, index) =>
            <Grid key={index} container direction="row" sx={{ mt: 2, mb: 2 }}>
                {cardType === 'Project' ? itemArray.map((item, i) =>
                    <ProjectCard key={i} image={item} />
                ) :
                    <ExperienceCard imageArray={itemArray} />
                }
            </Grid>
        )
    );
};

CardRow.propTypes = {
    nestedImageArray: PropTypes.array.isRequired,
    cardType: PropTypes.string.isRequired
}

export default CardRow;
