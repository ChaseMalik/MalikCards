import './Footer.css';

import Typography from '@material-ui/core/Typography';
import React from 'react';

const Footer = () => {
    return (
        <Typography
            className="app-footer"
            color="textSecondary"
            align="right"
        >
            {'Built with '}
            <span role="img" aria-label="Love">
                ❤️
            </span>
            {' by Chase'}
        </Typography>
    );
}

export default Footer;