import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const { icon } = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className="app-container" disableGutters>
        <MailIcon className={icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Malik Cards
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
