import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const MenuButton = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const anchorRef = React.useRef(null);

    function handleToggle() {
        setOpen((prevOpen) => !prevOpen);
    }

    function handleClose({ target }) {
        if (anchorRef.current && anchorRef.current.contains(target)) {
            return;
        }
        if (target.attributes.name) {
            const name = target.attributes.name.textContent;
            switch(name) {
            case 'aboutMe':
                navigate('/aboutMe');
                break;
            case 'experience':
                navigate('/experience');
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
            <IconButton
                sx={{ mr: 2 }}
                color="inherit"
                aria-label="menu"
                aria-haspopup="true"
                aria-controls={open ? 'menu-list-grow' : undefined}
                ref={anchorRef}
                onClick={handleToggle}
            >
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

export default MenuButton;
