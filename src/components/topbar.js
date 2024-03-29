import React, { useContext, Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

import { CurrentUserContext } from '../contexts/currentUser';

const pages = ['Home', 'Sign in', 'Sign up'];

const Topbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentUserState, setCurrentUserState] =
    useContext(CurrentUserContext);

  console.log('topbar');
  console.log('currentUserState', currentUserState.isLoggedIn);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const userImage = (currentUserState.isLoggedIn && currentUserState.currentUser.image)
    || 'https://api.realworld.io/images/smiley-cyrus.jpeg';

  return (
    <AppBar position="static" style={{ marginBottom: '2rem' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            RealWorld
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              {currentUserState.isLoggedIn == null && (
                <div>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Sign in</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Sign up</Typography>
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            RealWorld
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLink to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</NavLink>
            </Button>
            {currentUserState.isLoggedIn && (
              <Fragment>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink to="/settings" style={{ color: '#fff', textDecoration: 'none' }}>Settings</NavLink>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.3rem' }}
                >
                  <img style={{ width: '20px', borderRadius: '50%' }} src={userImage} alt="" />
                  <NavLink to={`/profiles/${currentUserState.currentUser.username}`} style={{ color: '#fff', textDecoration: 'none' }}>
                    {currentUserState.currentUser.username}
                  </NavLink>
                </Button>
              </Fragment>
            )}
            {!currentUserState.isLoggedIn && (
              <Fragment>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Sign in</NavLink>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Sign up</NavLink>
                </Button>
              </Fragment>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Topbar;
