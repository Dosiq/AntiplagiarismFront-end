import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { useAuth } from './api/AuthContext';

export default function AppBarComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };
  const {logout} = useAuth();
   

  const handleClick = (e) => {
    e.preventDefault()
    fetch(
      "http://localhost:8080/auth/logout", {
      method: "POST",
    }).then(() => {
      logout();
      console.log("posted");
    })
  }

  const DrawerList = (
    <Box sx={{ width: 250, backgroundColor:'#8E8D8A'}} role="presentation" onClick={toggleDrawer(false)} style={{color: 'white'}}>
      <List >
        {['Scan', 'Scanned'].map((text, index) => (
          <ListItem sx={{color:'white'}} key={text} disablePadding component={Link} to={`/${text.toLowerCase()}`}  >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" sx={{backgroundColor:'#8E8D8A'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{textDecoration: 'none', color:'white'}}>Plagiarism Checker</Link>
          </Typography>
          <Button color="inherit" onClick={handleClick} sx={{color:'white'}}>Logout</Button>
        </Toolbar>
      </MuiAppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}
