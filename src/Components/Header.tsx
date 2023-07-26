import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const circularImages = [
  "https://www.wazzadu.com/thumbs/product/resize/1024/08c7d1c0-e1ed-11e5-ac80-c3f524ac8483.jpg",
  "https://www.wazzadu.com/thumbs/product/resize/1024/08c7d1c0-e1ed-11e5-ac80-c3f524ac8483.jpg",
  "https://www.wazzadu.com/thumbs/product/resize/1024/08c7d1c0-e1ed-11e5-ac80-c3f524ac8483.jpg"
];

const rectangularImages = [
  "https://www.wazzadu.com/thumbs/product/resize/1024/08c7d1c0-e1ed-11e5-ac80-c3f524ac8483.jpg",
  "https://www.wazzadu.com/thumbs/product/resize/1024/08c7d1c0-e1ed-11e5-ac80-c3f524ac8483.jpg",
  "https://www.wazzadu.com/thumbs/product/resize/1024/08c7d1c0-e1ed-11e5-ac80-c3f524ac8483.jpg"
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

export default function Album() {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const renderDesktopMenu = (
    <div>
          <Box sx={{flexGrow: 1 }}></Box>
          <Box sx={{flexDirection: "row",display:"flex",justifyContent:"space-around"}}> 
        <Box >Home</Box>
          <Box sx={{ml:2}}>Contact</Box >
          <Box sx={{ml:2}}>About</Box >
          <Box sx={{ml:2}}>More</Box >
        </Box>
        <Box sx={{flexGrow: 1 }}></Box>
 
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
      <MenuItem onClick={handleMobileMenuClose}>ABOUT US</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>SOLUTION</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>BLOG</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>CONTACT US</MenuItem>
   
    </Menu>
    
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
        

          {/* เปิดเมนู Mobile */}
          {isMobile && (
            <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            
            <Box sx={{flexGrow: 1 }}></Box>
            <Box>
            <img
            src="https://www.tracthai.com/_next/static/media/logonew.10e8c496.png?fbclid=IwAR1mKOL36ADiap6Y1zfBrUtf1bosYhyI-zyz_v8Tm2LXzyUcR4MDOEDY-qA"
            alt="Logo"
            style={{
              width: isMobile ? '100px' : '150px',
              height: 'auto',
              marginRight: isMobile ? 'auto' : '20px',
            }}
          />
          </Box>
          <Box sx={{flexGrow: 1 }}></Box>
        <select  style={{ marginLeft: 'auto', color: '#000000' }}>
            <option value="TH">TH</option>
            <option value="EN">EN</option>
          </select>
            </>
          )}
          
        

          {!isMobile && (
            <>
            <img
            src="https://www.tracthai.com/_next/static/media/logonew.10e8c496.png?fbclid=IwAR1mKOL36ADiap6Y1zfBrUtf1bosYhyI-zyz_v8Tm2LXzyUcR4MDOEDY-qA"
            alt="Logo"
            style={{
              width: isMobile ? '100px' : '150px',
              height: 'auto',
              marginRight: isMobile ? 'auto' : '20px',
            }}
          />
          <Box sx={{flexGrow: 1 }}></Box>
          <Box sx={{flexDirection: "row",display:"flex",justifyContent:"space-around"}}> 
          <Box sx ={{cursor:"pointer",fontSize: '24px'}} >HOME</Box>
          <Box sx={{ml:2,fontSize: '24px',cursor:"pointer"}}>ABOUT US</Box >
          <Box sx={{ml:2,fontSize: '24px',cursor:"pointer"}}>SOLUTION</Box >
          <Box sx={{ml:2,fontSize: '24px',cursor:"pointer"}}>BLOG</Box >
          <Box sx={{ml:2,fontSize: '24px',cursor:"pointer"}}>CONTACT US</Box >
        </Box>
        <Box sx={{flexGrow: 1 }}></Box>
        <select  style={{ marginLeft: 'auto', color: '#000000' }}>
            <option value="TH">TH</option>
            <option value="EN">EN</option>
          </select>
        
        </>)}          
        </Toolbar>
        {renderMobileMenu}
      </AppBar>

      <main>
        <Container maxWidth={false} sx={{ bgcolor: '#ff0000', color: 'white' }}>
          <Typography component="h1" variant="h1" align="center" gutterBottom>
            TRAC
          </Typography>
          <Typography variant="h4" align="center" paragraph>
            THE RECOVERY ADVISOR COMPANY LIMITED
          </Typography>
          <Box sx={{ pt: 4 }}>
            <Grid container spacing={2} justifyContent="center">
              {/* Add any additional content here */}
            </Grid>
          </Box>
        </Container>

        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography component="h3" variant="h3" align="center" paragraph>
            SOLUTION
          </Typography>
          <Grid sx={{display:"flex",justifyContent: 'center',alignItems: 'center'}} container spacing={4}>
            {circularImages.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: '50%', height: isMobile ? 100 : 150, width: isMobile ? 100 : 150, paddingTop: '1%' }}
                    image={image}
                    alt={`Circular Image ${index + 1}`}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      Details.................................
                      ............................................
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography component="h3" variant="h3" align="center" paragraph>
            BLOG
          </Typography>
          {/* Render rectangular images */}
          <Grid  container spacing={4}>
            {rectangularImages.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    sx={{ pt: '1%', borderRadius: '10%' }}
                    image={image}
                    alt={`Rectangular Image ${index + 1}`}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      Details.................................
                      ...............................................
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Button variant="contained" color="success">READ MORE</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: '#000000', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="#ffffff" component="p">
          Copyright 2023 The Recover Advisor Company Limited
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
