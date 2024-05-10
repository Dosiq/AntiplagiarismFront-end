import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function AppBarComponent() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" sx={{backgroundColor:'#8E8D8A'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{textDecoration: 'none', color:'white'}}>Plagiarism Checker</Link>
          </Typography>
          <Link to="/signin"><Button color="inherit" sx={{color:'white'}}>Login</Button></Link>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
