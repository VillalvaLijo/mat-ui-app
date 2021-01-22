import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,  
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



export default function NavBar(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar varient="h6"className={classes.title}>
                    <Router>              {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        
                    </IconButton> */}
                    <button color="inherit"><Link to="/RealEstateListings">Real Estate Listings</Link></button>
                    <button color="inherit"><Link to="/About">About </Link></button> 
                    <button color="inherit"><Link to="/Contact">Contact</Link></button>
                    </Router>      
                </Toolbar>
            </AppBar>
        </div>
    );

}