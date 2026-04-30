import type { SxProps, Theme } from '@mui/material'

export const headerTextContainerSx: SxProps<Theme> = { mt: 3, mb: 3 }

export const paperTextContainerSx: SxProps<Theme> = { ml: 3, mr: 3, mb: 2, background: '#324a54' }

export const headerTextSx: SxProps<Theme> = {
    fontSize: '2.6em',
    fontWeight: 'bold',
    ml: 3,
    mb: 2,
    fontFamily: 'Quicksand, sans-serif'
}

export const paperTextSx: SxProps<Theme> = {
    fontSize: '1.3em',
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
    mt: 1,
    p: 3,
    lineHeight: '45px'
}
