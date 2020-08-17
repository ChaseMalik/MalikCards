import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { ViewType } from 'react-images';

import CustomLightbox from './CustomLightbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: `${theme.spacing(3)}px 0 0`,
  },
}));

const Hero = ({ images }: { images: ViewType[] }) => {
  const { root } = useStyles();
  return (
    <div className={root}>
      <CustomLightbox images={images} />
    </div>
  );
};

export default Hero;
