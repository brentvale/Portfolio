import React, { Component } from 'react';

class SocialMediaIconDisplay extends Component {
  constructor() {
    super();
    this.state = {
      hovering: false,
    };
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnMouseEnter() {
    this.setState({ hovering: true });
  }

  handleOnMouseLeave() {
    this.setState({ hovering: false });
  }

  render() {
    const { href, id, altText } = this.props;
    const klassName = (this.state.hovering) ? 'crate spin' : 'crate unspin';
    return (
      <a
        href={href}
        alt={altText}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          id={id}
          className={klassName}
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
        >
          <div className="face one" />
          <div className="face two" />
          <div className="face three" />
          <div className="face four" />
          <div className="face five" />
          <div className="face six" />
        </div>
      </a>);
  }
}

export default SocialMediaIconDisplay;
