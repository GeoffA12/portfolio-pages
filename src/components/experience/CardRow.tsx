import React from 'react'
import Grid from '@mui/material/Grid'
import ProjectCard from './ProjectCard'
import ExperienceCard from './ExperienceCard'
import type { ProjectImage } from './ProjectCard'
import type { TechImage } from './ExperienceCard'

type CardType = 'Project' | 'Experience'

interface Props {
    nestedImageArray: ProjectImage[][] | TechImage[][]
    cardType: CardType
}

const CardRow = ({ nestedImageArray, cardType }: Props) => {
    return(
        <>
            {nestedImageArray.map((itemArray, index) =>
                <Grid key={index} container direction="row" sx={{ mt: 2, mb: 2 }}>
                    {cardType === 'Project'
                        ? (itemArray as ProjectImage[]).map((item, i) =>
                            <ProjectCard key={i} image={item} />
                        )
                        : <ExperienceCard imageArray={itemArray as TechImage[]} />
                    }
                </Grid>
            )}
        </>
    )
}

export default CardRow
