import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./ListItems";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Header from "./Header";
import { Button, Modal } from "@mui/material";
import { MenuContext } from "../context/NotificationContext";
import Settings from "@mui/icons-material/Settings";
import Setting from "./Setting";
import Notification from "./Notification";
import Research from "./Research";
import Action from "./Action";
import Calender from "./Calender"
import DocNotification from './DocNotification'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import userData from '../../../syndx-backend/data.json'
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DealSpace from "./DealSpace";


// import { styled } from '@mui/material/style
const firstLetter = userData[userData.length-1].name.replace(/\p{Emoji}/gu, '').replace(/[^A-Za-z]/g, '').charAt(0).toUpperCase();
const Dot = styled('span')({
  position: 'absolute',
  bottom: 1,
  right: 5,
  width: 10,
  height: 10,
  // borderRadius: '50%',
  // backgroundColor: 'lightgreen',
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [modalOpen, setModalOpen] = React.useState(false);

  const { menuOpen, setMenuOpen } = React.useContext(MenuContext);

    const componentMap = {
    calender: <Calender />,
    settings: <Setting />,
    action:  <Action/>,
    notifications:<Notification/>,
    document:<DocNotification/>,
    research:<Research/>
    // Add more menu options and their corresponding components as needed
  };
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
  const selectedComponent = componentMap[menuOpen];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const clicked  = () =>{
    console.log('clicked')
  }
  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              SyndX
            </Typography>
            <Header pressHeaderIcon={() => setModalOpen(true)} />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <ListItemButton>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 200,
          height: 50,
          marginLeft: 0,
          // border: '1px solid black',
          borderRadius: 0,
        }}
      >
        <ListItemIcon sx={{ textAlign: 'center', marginRight: -1 }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Avatar>{firstLetter}</Avatar>
            <Dot />
          </div>
          {/* <DashboardIcon /> */}
        </ListItemIcon>
        <ListItemText primary={userData[userData.length-1].name} />
      </Box>
    </ListItemButton>

            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <DealSpace/>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
       <Modal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >

          <Box
            sx={{
              width: 400,
              height: 600,
              backgroundColor: "#FFF",
              border: "1px solid #000",
              outline: "none",
              textAlign: "center",
              margin: "5rem auto", // Keep the vertical margin as it is
              marginLeft: "auto", // Set marginLeft to auto to push the modal to the right
              marginRight: "1rem", // Remove marginRight
            }}
          >
            <h2 id="parent-modal-title">Modal</h2>
            <p id="parent-modal-description">Content would be here.....</p>
            {

            }

            {
              // menuOpen =='calender' ? <Calender /> : menuOpen=='settings' ? <Settings /> :null
            }

             {selectedComponent}

            

            {/* <Button onClick={clicked}>Close</Button> */}
          </Box>
        </Modal>
        
      </Box>
    </ThemeProvider>
  );
}
