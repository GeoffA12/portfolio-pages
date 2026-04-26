import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { paperTextSx } from '../../common/styles/SharedStyles';

const ProjectCard = ({ image }) => {
    return(
        <Grid item xs={3} sx={{ mr: 3, ml: 3 }}>
            <Card sx={{ height: '60vh', width: 'auto', display: 'flex', flexDirection: 'column', background: '#324a54' }}>
                <CardContent>
                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                        <img src={image.imgSrc} alt={image.imgAlt} style={{ height: '46vh', width: '100%', objectFit: 'cover' }} />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={paperTextSx}>
                                {image.text}
                            </Typography>
                        </div>
                    </a>
                </CardContent>
            </Card>
        </Grid>
    );
}

ProjectCard.propTypes = {
    image: PropTypes.object.isRequired
}

export default ProjectCard;
