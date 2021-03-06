import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from '../../containers/Site/SignIn/SignIn';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));




export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Marcee Fashion
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" exact to="/" className={classes.link}>
              Home
            </Link>
            <Link variant="button" color="textPrimary" exact to="/shop" className={classes.link}>
              Shop
            </Link>
            <Link variant="button" color="textPrimary" exact to="/signin" className={classes.link}>
              Account
            </Link>
            
          </nav>
          <Button 
          onClick={()=><SignIn/>}
          color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
     
    </React.Fragment>
  );
}