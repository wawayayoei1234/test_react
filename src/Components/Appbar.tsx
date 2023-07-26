import React from 'react';
import { AppBar, Box, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import  Menu  from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import useMediaQuery  from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';

const AppBarComponent = () => {
  const isMobile = useMediaQuery('(max-width: 600px)'); // ตรวจสอบว่าเป็น Mobile view หรือไม่

  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const renderDesktopMenu = (
    <div style={{display:"flex",justifyContent: 'center',alignItems: 'center'}}>
      <MenuItem>Home</MenuItem>
      <MenuItem>Contact</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>More</MenuItem>
    </div>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchor}
      keepMounted
      open={Boolean(mobileMenuAnchor)}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>Home</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>Contact</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>About</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>More</MenuItem>
    </Menu>
  );

  return (
    <AppBar  position="static">
      <Toolbar>
        {/* โลโก้หรือชื่อแอป */}
        <Box> Your App Name</Box>

        {/* แสดงเมนู Desktop */}
        <Box sx={{flexGrow: 1 }}></Box>
          <Box sx={{flexDirection: "row",display:"flex",justifyContent:"space-around"}}> 
        <Box >Home</Box>
          <Box sx={{ml:2}}>Contact</Box >
          <Box sx={{ml:2}}>About</Box >
          <Box sx={{ml:2}}>More</Box >
        </Box>
        <Box sx={{flexGrow: 1 }}></Box>
        <Box>
          TH
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;