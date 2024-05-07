import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';


function Menuitems({pressHeaderIcon,label,icon,badge}) {
    return (
        <div>
            <MenuItem onClick={()=> pressHeaderIcon()}>
          <Tooltip title="Calendar">
            <IconButton size="large" aria-label={icon} color="inherit">
              <Badge badgeContent={4} color="error">
              {badge}
              </Badge>
            </IconButton>
          </Tooltip>
          <p>{label}</p>
       
      </MenuItem>
        </div>
    );
}

export default Menuitems;