import React from 'react';
import FontAwesome from 'react-fontawesome';

import './styles.css';

const PageController = (props) => (
  <div className="pageController">
    <button onClick={() => props.setPage("prev")}>
      <FontAwesome name="chevron-left" />
    </button>
    <p>{props.page} of {props.totalPages}</p>
    <button onClick={() => props.setPage("next")}>
      <FontAwesome name="chevron-right" />
    </button>
  </div>
);

export default PageController;
