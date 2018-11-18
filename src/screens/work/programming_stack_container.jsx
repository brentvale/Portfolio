import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgrammingStackComponent from './programming_stack_component';
import { forEach } from 'lodash';

const TECHNOLOGIES = ['React', 'Jest', 'Mocha', 'Chai', 'Enzyme', 'Express', 'Rails', 'Ruby', 'Rspec', 'Photoshop', 'Java', 'Python'];

export default class ProgrammingStackContainer extends Component {
  constructor(props) {
    super(props);
    this.createSelectedHashFromProps = this.createSelectedHashFromProps.bind(this);
  }

  createSelectedHashFromProps() {
    const hash = {};
    if (typeof this.props.selectedTechnologies !== 'undefined') {
      forEach(this.props.selectedTechnologies, (technology) => {
        hash[technology] = true;
      });
    }
    return hash;
  }

  render() {
    const { addSelectedTechnology, removeSelectedTechnology } = this.props;

    const selectedHash = this.createSelectedHashFromProps();

    return (
      <div>
        {TECHNOLOGIES.map((technology, idx) => (
          <ProgrammingStackComponent
            id={technology}
            key={idx}
            addSelectedTechnology={addSelectedTechnology}
            removeSelectedTechnology={removeSelectedTechnology}
            selected={selectedHash[technology]}
          />
        ))}
      </div>);
  }
}

ProgrammingStackContainer.PropTypes = {
  addSelectedTechnology: PropTypes.func.isRequired,
  removeSelectedTechnology: PropTypes.func.isRequired,
  selectedTechnologies: PropTypes.array.isRequired,
};
