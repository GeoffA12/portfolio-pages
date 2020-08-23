import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { sharedStyles } from '../../common/styles/SharedStyles';

const useStyles = makeStyles(({spacing}) => ({
    projectCardGrid: {
        marginRight: spacing(3),
        marginLeft: spacing(3),
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
    }
}));

const ProjectCard = ({ image }) => {
    const classes = useStyles();
    const sharedClasses = sharedStyles();

    return(
        <Grid item xs={3} className={classes.projectCardGrid}>
            <Card className={classes.cardContainer}>
                <CardContent>
                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                        <img src={image.imgSrc} alt={image.imgAlt} className={classes.projectImgStyle} />
                        <div className={classes.captionContainer}>
                            <Typography className={sharedClasses.paperText}>
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
