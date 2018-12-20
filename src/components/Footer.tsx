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
            <span role="img" aria-label="Present">
                🎁
            </span>
            {' from Chase'}
        </Typography>
    );
}

export default Footer;