import React, { Component } from 'react';

class CheckboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false, // Initial state of the checkbox
    };
  }

  handleCheckboxChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    return (
      <div className='pera'>
        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleCheckboxChange}
          />
       Remember Me
        </label>
      </div>
    );
  }
}

export default CheckboxComponent;
