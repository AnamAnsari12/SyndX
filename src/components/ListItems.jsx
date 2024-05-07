import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Container from '@mui/material/Container'
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import userData from '../../data.json'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile'

const content = 'Usama';

const firstLetter = userData[userData.length-1].name.replace(/\p{Emoji}/gu, '').replace(/[^A-Za-z]/g, '').charAt(0).toUpperCase();


const Dot = styled('span')({
  position: 'absolute',
  bottom: 1,
  // top:0,
  right: 5,
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: 'lightgreen',
});

const StyledLink = styled(Link)({
  textDecoration: 'none', 
  color: 'inherit', 
});


console.log(userData[userData.length - 1].name)
export const mainListItems = (
  <React.Fragment>


    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <Container maxWidth="xs">


    </Container>


    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>


    {/* <ListItemButton>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 200,
          height: 50,
          marginLeft: 2,
          border: '1px solid black',
          borderRadius: 0,
        }}
      >
        <ListItemIcon sx={{ textAlign: 'center', marginLeft: 2 }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Avatar  alt="image.png" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s' sx={{objectFit:'contain',imageOrientation:"from-image"}}/>
            <Dot />
          </div>
        </ListItemIcon>
        <ListItemText primary={userData[userData.length-1].name} />
      </Box>
    </ListItemButton> */}
    {/* <Link to="/userProfile">


      <ListItemButton>
        <ListItemIcon>
          <AccountBoxIcon />

        </ListItemIcon>
        <ListItemText primary='Profile' />
      </ListItemButton>
    </Link> */}
    <StyledLink to="/userProfile">
      <ListItemButton>
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        {/* <ListItemText primary={userData[userData.length-1].name} /> */}

        <ListItemText primary="Profile" />
      </ListItemButton>
    </StyledLink>
  </React.Fragment>
);