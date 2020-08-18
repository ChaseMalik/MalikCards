import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(1)}px 0px`,
  },
}));

const Footer = () => {
  const { root } = useStyles();
  return (
    <Typography className={root} color="textSecondary" align="right">
      <span role="img" aria-label="Present">
        🎁
      </span>
      {' from Chase'}
    </Typography>
  );
};

export default Footer;
