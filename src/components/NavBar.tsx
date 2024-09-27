'use client';
import React, {useState, MouseEvent} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { usePathname, useRouter } from 'next/navigation';
import routes from '@/data/routes.json'



interface NavItemProps {
  title: string;
  onClick: () => void;
}
const NavItem = ( {title, onClick} : NavItemProps ) => {
  return (
    <MenuItem onClick={onClick}>
      <Typography>
        {title}
      </Typography>
    </MenuItem>
  );
};

 export const NavBar = () => {
  // const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRouteChange = (newRoute: string) => {
    handleClose();
    router.push(newRoute);
  }

  const currentPage = usePathname();

  return (
      <AppBar position="static" sx={{minHeight: 150,}}>
        <Toolbar sx={{backgroundColor:'black'}}>
          {currentPage !== "/" && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="back button"
              sx={{ mr: 2 }}
              onClick={()=>{router.back()}}
            >
              <ArrowBackIcon />
            </IconButton>  
          )}
          <Box  component="div" sx={{ flexGrow: 1,  justifyContent:'center', textAlign:'center', alignItems:'center',  }}>
            {/* <Box sx={{ flex:1, height: 'auto'}}>
              {`[ LOGO ]`}
            </Box> */}
          </Box>
            <div>
              <IconButton
                size="large"
                aria-label="expand/collapse menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {routes.pages.map(
                  (item) => (
                    <NavItem 
                      title={item.name} 
                      key={`${item.name}-nav`}
                      onClick={() => { 
                        handleRouteChange(item.route) 
                      }}
                    />
                  )
                )}
              </Menu>
            </div>
        </Toolbar>
        <Box  component="div" sx={{ flexGrow: 1,  justifyContent:'center', textAlign:'center', alignItems:'center',  }}>
            <Box sx={{ flexGrow:1, alignSelf:'center', height: '100%'}}>
              {`[ LOGO ]`}
            </Box>
          </Box>
      </AppBar>
  );
}

export default NavBar;