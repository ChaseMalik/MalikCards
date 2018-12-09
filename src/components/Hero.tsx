import { StyleRulesCallback, withStyles } from '@material-ui/core/styles';
import React from 'react';

import CustomLightbox from './CustomLightbox';

const styles: StyleRulesCallback = theme => ({
    heroContent: {
        display: 'flex',
        justifyContent: 'center',
        padding: `${theme.spacing.unit * 3}px 0 0`,
    },
});

const Hero = ({ classes, images }) => {
    return (
        <div className={classes.heroContent}>
            <CustomLightbox images={images} />
        </div>
    );
}

export default withStyles(styles)(Hero);
