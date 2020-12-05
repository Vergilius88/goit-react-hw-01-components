import React from 'react';
import PropTypes from 'prop-types';
import wrapSectionStyles from './wrapSectionStyles.js';

const { Sections, Title } = wrapSectionStyles;

function Section({ title, children }) {
    return (
      <Sections>
        <Title> {title}</Title>
        {children}
      </Sections>
    );
  }
  
  Section.defaultProps = {
    title: 'Start sections',
  };
  Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
  
  export default Section;