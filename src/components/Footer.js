import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = ({ mode }) => {
  const currentYear = new Date().getFullYear();
  const textColorStyle = { color: 'white' };

  return (
    <div className="container" style={{ marginTop: '100vh' }}>
      <footer>
        <hr style={textColorStyle} />
        <div className="d-flex justify-content-between">
          <p style={textColorStyle}>
            {`© ${currentYear} Textify. All rights reserved.`}
          </p>
          <a
            href="https://github.com/itsamit108"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Profile"
          >
            <FaGithub size={25} className="github-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
