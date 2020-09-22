import React from 'react';
import { Link } from 'react-router-dom'
import { findDOMNode } from 'react-dom';


class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1 className="home-header" ref={c => (this.header = c)}>
          New Horizons in Autism, Inc.
        </h1>
        <Link
          ref={l => (this.button = findDOMNode(l))}
          className="button"
          to="/about"
        >
          Click Here!
        </Link>
      </div>
    );
  }
}

export default Home;