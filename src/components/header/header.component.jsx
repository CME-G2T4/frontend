import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';
import { makeStyles } from '@mui/styles';

// import './header.styles.scss';
import Logo from '../../assets/logo.png';
import Status from './status.component';

export default function Header() {

  const pathname = window.location.pathname;
  // const path = pathname === '/' ? 'home' : pathname.substr(1);
  // const country = pathname.split("/")[1];
  // var item = null;
  // if (pathname.split("/").length > 2) {
  //   var item = pathname.split("/")[2];
  // }

  const [openTH, setOpenTH] = useState(true);

  // For the icons
  const useStyles = makeStyles({
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    }
  });

  const [state, setState] = useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <Box my={1}>
        <Toolbar component="a" href="/">
          <img style={{width:"100%"}} src={Logo} alt="Aramco"  />
        </Toolbar>
      </Box>
      <Divider />

      <List>
        {/* Tracking */}
        <ListItem button component="a" href="/tracking" className={"" + ( pathname === "/tracking" ? "current" : "")} >
          <ListItemIcon >
            <Icon classes={{root: useStyles.iconRoot}}>
              {/* <img className={useStyles.imageIcon} src={ThailandFlag} alt="TH" /> */}
            </Icon>
          </ListItemIcon>
          <ListItemText primary={`Tracking Info`} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar position="static" color="transparent" enableColorOnDark="true" style={{  }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, position: 'absolute'}}
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor={'left'}
              open={state['left']}
              onClose={toggleDrawer('left', false)}
            >
              { list('left') }
            </SwipeableDrawer>

            {/* Header Details */}
            <Typography variant="h6" component="a" href="/" sx={{ mx: 'auto', my: 'auto' }}>
              <Box my={1} sx={{ display:'flex' }}>
                <img style={{ width: "50%", margin: 'auto'}} src={Logo} alt="ShinobiLorry"  />
              </Box>
            </Typography>
            <Status />
          </Toolbar>
        </AppBar>
      </Box>
    </>
    
  );
}