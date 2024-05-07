import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import CalendarIcon from '@mui/icons-material/Event';
import ActionIcon from '@mui/icons-material/NotificationsActive';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingIcon from '@mui/icons-material/Settings';
import DocumentIcon from '@mui/icons-material/Description';
import ResearchIcon from '@mui/icons-material/Science';
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip
import { Button } from '@mui/material';
import { MenuContext } from '../context/NotificationContext';

export default function Header({pressHeaderIcon}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [activeRoute, setActiveRoute] = React.useState('/calendar');
  const [selectedIcon, setSelectedIcon] = React.useState("calendar");
  const { menuOpen, setMenuOpen } = React.useContext(MenuContext);

  const location = useLocation();

  React.useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen("profile")
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button onClick={()=>{ pressHeaderIcon(); setMenuOpen("calender")}}>
          <Tooltip title="Calendar">
            <IconButton size="large" aria-label="show 4 new calendar" color="inherit">
              <Badge badgeContent={4} color="error">
                <CalendarIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <p>Calendar</p>
        </Button>
      </MenuItem>

      <MenuItem>
      <Button onClick={()=> {pressHeaderIcon(); setMenuOpen("action")}}>
          <Tooltip title="Action">
            <IconButton size="large" aria-label="action" color="inherit">
              <ActionIcon />
            </IconButton>
          </Tooltip>
          <p>Action</p>
        </Button>
      </MenuItem>

      <MenuItem>
      <Button onClick={()=> {pressHeaderIcon(); setMenuOpen("notifications")}}>
          <Tooltip title="Notifications">
            <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <p>Notifications</p>
        </Button>
      </MenuItem>

      <MenuItem>
      <Button onClick={()=>  {pressHeaderIcon(); setMenuOpen("settings")}}>
          <Tooltip title="Setting">
            <IconButton size="large" aria-label="show 4 new setting" color="inherit">
              <Badge badgeContent={4} color="error">
                <SettingIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <p>Setting</p>
        </Button>
      </MenuItem>
      <MenuItem>
      <Button onClick={()=>  {pressHeaderIcon(); setMenuOpen("document")}}>
          <Tooltip title="Document">
            <IconButton size="large" aria-label="show 17 new document" color="inherit">
              <Badge badgeContent={17} color="error">
                <DocumentIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <p>Document</p>
        </Button>
      </MenuItem>
      <MenuItem>
      <Button onClick={()=>  {pressHeaderIcon(); setMenuOpen("research")}}>
          <Tooltip title="Research">
            <IconButton size="large" aria-label="research" color="inherit">
              <Badge badgeContent={17} color="error">
                <ResearchIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <p>Research</p>
        </Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{
      display: 'flex',
      bgcolor: 'white',
      borderRadius: '10px',
      padding: '0px 10px',
    }}>

      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Box onClick={()=>{
          setSelectedIcon("calendar");
           pressHeaderIcon();
           setMenuOpen("calender")
          }} style={{borderBottom: selectedIcon === "calendar" ? "5px solid blue" : null}}>
          <Tooltip title="Calendar">
            <IconButton size="large" aria-label="show 4 new calendar" color="inherit">
              <Badge badgeContent={4} color="error">
                <CalendarIcon htmlColor={selectedIcon === "calendar" ? "blue" : "grey"} />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
        <Box onClick={()=>{
          setSelectedIcon("action");
           pressHeaderIcon();
           setMenuOpen("action");
          }} style={{borderBottom: selectedIcon === "action" ? "5px solid blue" : null}}>
          <Tooltip title="Action">
            <IconButton size="large" aria-label="action" color="inherit">
              <ActionIcon htmlColor={selectedIcon === "action" ? "blue" : "grey"} />
            </IconButton>
          </Tooltip>
        </Box>
        <Box onClick={()=>{
          setSelectedIcon("notification");
           pressHeaderIcon();
           setMenuOpen("notifications")
          }} style={{borderBottom: selectedIcon === "notification" ? "5px solid blue" : null}}>
          <Tooltip title="Notifications">
            <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon htmlColor={selectedIcon === "notification" ? "blue" : "grey"} />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
        <Box onClick={()=>{
          setSelectedIcon("setting");
           pressHeaderIcon();
           setMenuOpen("settings")
          }} style={{borderBottom: selectedIcon === "setting" ? "5px solid blue" : null}}>
          <Tooltip title="Setting">
            <IconButton size="large" aria-label="show 4 new setting" color="inherit">
              <Badge badgeContent={4} color="error">
                <SettingIcon htmlColor={selectedIcon === "setting" ? "blue" : "grey"} />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
        <Box onClick={()=>{
          setSelectedIcon("document");
           pressHeaderIcon();
           setMenuOpen("document")
          }} style={{borderBottom: selectedIcon === "document" ? "5px solid blue" : null}}>
          <Tooltip title="Document">
            <IconButton size="large" aria-label="show 17 document" color="inherit">
              <Badge badgeContent={17} color="error">
                <DocumentIcon htmlColor={selectedIcon === "document" ? "blue" : "grey"} />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
        <Box onClick={()=>{
          setSelectedIcon("research");
           pressHeaderIcon();
           setMenuOpen("research")
          }} style={{borderBottom: selectedIcon === "research" ? "5px solid blue" : null}}>
          <Tooltip title="Research">
            <IconButton size="large" aria-label="research" color="inherit">
              <Badge badgeContent={17} color="error">
                <ResearchIcon htmlColor={selectedIcon === "research" ? "blue" : "grey"} />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
        {/* <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Tooltip title="Profile">
            <AccountCircle />
          </Tooltip>
        </IconButton> */}
      </Box>

      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
