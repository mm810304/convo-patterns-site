import React from 'react';
import { Link } from 'gatsby';

import { linkData } from '../constants/Links.js';

import footerStyles from './footer.module.css';

const Footer = () => {
    return (
      <footer className={footerStyles.footer}>
        <div>
          <h3 className={footerStyles.mainText}>
            Have a Question or See a Mistake? </h3>
            <h3 className={footerStyles.contact}><a className="footer-a" href="mailto:support@convoenglish.co">Contact Us</a> <span className={footerStyles.email}> - support@convoenglish.co</span>
          </h3>
        </div>
        <div>
          <h3 className={footerStyles.mainText}>
            copyright&copy;{new Date().getFullYear()}
            <span> ConvoEnglish LLC </span> all rights reserved
          </h3>
        </div>
        <div>
          <h3 className={footerStyles.mainText}>
            <Link className="footer-a" to={linkData[2].url}>More Free English Lessons</Link>
          </h3>
        </div>
      </footer>
    );
};

export default Footer;