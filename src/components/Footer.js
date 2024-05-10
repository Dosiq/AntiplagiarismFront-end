import React from 'react';
import { makeStyles } from '@mui/styles';
import { IconButton } from '@material-ui/core';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#8E8D8A',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    width: '100%',
    bottom: 0,
    left: 0,
    overflow: 'auto',
    marginTop: 'auto',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <IconButton
        className={classes.icon}
        aria-label="Twitter"
        component="a"
        href="https://twitter.com"
        target="_blank"
      >
        <TwitterIcon style={{ color: '#fff' }} />
      </IconButton>
      <IconButton
        className={classes.icon}
        aria-label="Facebook"
        component="a"
        href="https://facebook.com"
        target="_blank"
      >
        <FacebookIcon style={{ color: '#fff' }} />
      </IconButton>
      <IconButton
        className={classes.icon}
        aria-label="Instagram"
        component="a"
        href="https://instagram.com"
        target="_blank"
      >
        <InstagramIcon style={{ color: '#fff' }} />
      </IconButton>
      <IconButton
        className={classes.icon}
        aria-label="LinkedIn"
        component="a"
        href="https://linkedin.com"
        target="_blank"
      >
        <LinkedInIcon style={{ color: '#fff' }} />
      </IconButton>
      <p><Link to={"/"} style={{textDecoration:'none', color:'#FFF'}}>© {new Date().getFullYear()} Plagiarism Checker</Link></p>
      <p>Made by Rymzhan Ilias</p>
    </footer>
  );
};

export default Footer;
