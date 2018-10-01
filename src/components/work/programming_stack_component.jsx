import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class ProgrammingStackComponent extends Component {
  constructor() {
    super();
    this.handleSelectComponent = this.handleSelectComponent.bind(this);
  }

  handleSelectComponent() {
    if (this.props.selected) {
      this.props.removeSelectedTechnology(this.props.id);
    } else {
      this.props.addSelectedTechnology(this.props.id);
    }
  }

  render() {
    const { id, selected } = this.props;

    let klassName = 'technology-component hand-on-hover';
    klassName += (selected) ? ' selected' : '';

    return (
      <div id={id} className={klassName} onClick={this.handleSelectComponent}>
        <div>{id}</div>
      </div>
    );
  }
}

ProgrammingStackComponent.PropTypes = {
  addSelectedTechnology: PropTypes.func.isRequired,
  removeSelectedTechnology: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
