import React from 'react';

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("ScrollToTopOnMount");
  }

  render() {
    return null;
  }
}

export default ScrollToTopOnMount;