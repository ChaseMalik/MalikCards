import AppBar from '@material-ui/core/AppBar';
import { StyleRulesCallback, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';


const styles: StyleRulesCallback = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
});

const Header = ({ classes }) => {
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className="app-container" disableGutters>
                <MailIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                    Malik Cards
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(Header);
