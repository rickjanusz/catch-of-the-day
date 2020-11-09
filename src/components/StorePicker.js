import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object,
  };

  gotoStore = (e) => {
    //1. Stop the form from submitting
    e.preventDefault();
    //2. Get the text from the input
    const storeName = this.myInput.current.value;
    //3. Change the URL loc to /store/whatevs-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.gotoStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store &gt;</button>
      </form>
    );
  }
}

export default StorePicker;
