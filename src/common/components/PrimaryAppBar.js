import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MenuButton from './MenuButton';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: spacing(2)
    },
    home: {
        flexGrow: 1,
        color: 'white'
    },
    emailSpacing: {
        marginTop: spacing(1.5),
        marginRight: 'auto'
    }
}));

const PrimaryAppBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={0}>
                        <Grid item xs={false}>
                            <MenuButton />
                        </Grid>
                        <Grid item xs={false}>
                            <Link to="/">
                                <IconButton className={classes.home}>
                                    <HomeIcon />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid item xs={9}>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography className={classes.emailSpacing}>
                                Geoffarroyo@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default PrimaryAppBar;
