import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
  }));

const MenuButton = ({ history }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = React.useRef(null);

    function handleToggle() {
        setOpen((prevOpen) => !prevOpen)  
    }

    function handleClose({ target }) {
        if (anchorRef.current && anchorRef.current.contains(target)) {
            return;
        }
        if (target.attributes.name) {
            const name = target.attributes.name.textContent;
            switch(name) {
            case 'aboutMe':
                history.push('/aboutMe');
                break;
            case 'experience':
                history.push('/experience');
                break;
            default:
                break;
            }
        }
        setOpen(false);
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
      }

    const prevOpen = React.useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return(
        <>
            <IconButton className={classes.menuButton} color="inherit" aria-label="menu" aria-haspopup="true" aria-controls={open ? 'menu-list-grow' : undefined} ref={anchorRef} onClick={handleToggle}>
                <MenuIcon />
            </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose} name="aboutMe">About Me</MenuItem>
                        <MenuItem onClick={handleClose} name="experience">Experience</MenuItem>
                    </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Grow>
          )}
        </Popper>
        </>
    );
};

export default withRouter(MenuButton);
