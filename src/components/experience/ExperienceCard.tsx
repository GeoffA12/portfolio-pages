import React from 'react';
import Grid from '@mui/material/Grid';

export interface TechImage {
  imgSrc: string;
  imgAlt: string;
}

interface Props {
  imageArray: TechImage[];
}

const techImgStyle = {
  height: '37vh',
  width: '100%',
  objectFit: 'cover' as const,
  border: '2px solid #324a54',
  borderRadius: '3px',
};

const ExperienceCard = ({ imageArray }: Props) => {
  return (
    <>
      {imageArray.map((image, index) => (
        <Grid key={index} item xs={3} sx={{ mr: 3, ml: 3 }}>
          <img src={image.imgSrc} alt={image.imgAlt} style={techImgStyle} />
        </Grid>
      ))}
    </>
  );
};

export default ExperienceCard;
