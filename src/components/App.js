// This component handles the App template used on every page.
import React, {PropTypes} from 'react';


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>heading</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
