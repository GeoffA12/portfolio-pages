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
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  function handleToggle(event: React.MouseEvent<HTMLButtonElement>): void {
    setAnchorEl(open ? null : event.currentTarget);
    setOpen((prevOpen) => !prevOpen);
  }

  function handleClickAway(event: MouseEvent | TouchEvent): void {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as Element)
    ) {
      return;
    }
    setOpen(false);
    setAnchorEl(null);
  }

  function navigateAndClose(path: string): void {
    void navigate(path);
    setOpen(false);
    setAnchorEl(null);
  }

  function handleListKeyDown(event: React.KeyboardEvent): void {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
      setAnchorEl(null);
    }
  }

  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <IconButton
        sx={{ mr: 2 }}
        color='inherit'
        aria-label='menu'
        aria-haspopup='true'
        aria-controls={open ? 'menu-list-grow' : undefined}
        ref={anchorRef}
        onClick={handleToggle}
      >
        <MenuIcon />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorEl}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClickAway}>
                <MenuList
                  autoFocusItem={open}
                  id='menu-list-grow'
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem
                    onClick={() => {
                      navigateAndClose('/aboutMe');
                    }}
                  >
                    About Me
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigateAndClose('/experience');
                    }}
                  >
                    Experience
                  </MenuItem>
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
