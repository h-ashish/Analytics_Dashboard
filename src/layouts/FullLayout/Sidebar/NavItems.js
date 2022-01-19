import React,{useState } from 'react';
import { 
    List, 
    ListItem, 
    makeStyles,
    ListItemIcon, 
    ListItemText, 
    Collapse } from '@material-ui/core';
import { NavLink} from 'react-router-dom';
import {infoColor} from '../../../assets/jss/Theme-variable';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
        minWidth:'auto'
    },
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 5,
        
      },
    title: {
        marginRight: 'auto',
        fontWeight: '400'
    },
    active: {
        backgroundColor: infoColor,
        '&:hover' :{
            backgroundColor: infoColor,
        },
        '& $title': {
            color: "white"
        },
        '& $icon': {
            color: "white"
        }
    },
    button: {
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightMedium,
        justifyContent: 'flex-start',
        letterSpacing: 0,
        padding: '7px 6px',
        textTransform: 'none',
        width: '100%',
        
    },
    div: {
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightMedium,
        justifyContent: 'flex-start',
        letterSpacing: 0,
        padding: "0px",
        textTransform: 'none',
        width: '100%'
    },
    pwidth: {
        width: 200
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },

}));

const Navitems = ({ className, href, icon:Icon, title, ...rest }) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderSwitch = (params) => {
    switch(params){
        case "Analytics": 
            return (
            <div className={classes.div} >
            <ListItem button activeClassName={classes.active} to={href} component={NavLink}  className={classes.button} onClick={handleClick}  >
            <ListItemIcon className={classes.icon} ><Icon /></ListItemIcon>
            <ListItemText className={classes.title} >{title}</ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {/* <ListItem button activeClassName={classes.active} className={classes.nested} to={"/analytics"} component={NavLink} >
                    <ListItemText primary="Montly Production" />
                </ListItem> */}
                <ListItem button activeClassName={classes.active} className={classes.nested} to={"/machineanalytics"} component={NavLink}>
                    <ListItemText primary="Machine Analytics" />
                </ListItem>
                <ListItem button activeClassName={classes.active} className={classes.nested} to={"/operatoranalytics"} component={NavLink} >
                    <ListItemText primary="Operator Analytics" />
                </ListItem>
                <ListItem button activeClassName={classes.active} className={classes.nested} to={"/customeranalytics"} component={NavLink} >
                    <ListItemText primary="Customer Analytics" />
                </ListItem>
                </List>
            </Collapse>
            </div>
            );
        case "RealTime Tracker": 
            return (
                <div className={classes.div} >
            <ListItem button activeClassName={classes.active} to={href} component={NavLink}  className={classes.button} onClick={handleClick}  >
            <ListItemIcon className={classes.icon} ><Icon /></ListItemIcon>
            <ListItemText className={classes.title} >{title}</ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button activeClassName={classes.active} className={classes.nested} to={"/trends"} component={NavLink} >
                    <ListItemText primary="Trends" />
                </ListItem>
                <ListItem button activeClassName={classes.active} className={classes.nested} to={"/datagrid"} component={NavLink}>
                    <ListItemText primary="Data Grid" />
                </ListItem>
                </List>
            </Collapse>
            </div>
            );
        default :
        return (
            <ListItem button activeClassName={classes.active} component={NavLink} to={href}  className={classes.button} >
                <ListItemIcon className={classes.icon}><Icon /></ListItemIcon>
                <ListItemText className={classes.title}>{title}</ListItemText>
            </ListItem>
        )
    }
  }

    

    return (
        <List className={classes.item} disableGutters  {...rest}>
            {renderSwitch(title)}
        </List>
        
    );
}

export default Navitems;