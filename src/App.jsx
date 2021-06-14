import React from 'react'
import './App.scss'

import placeholder from './components/plaseholder';
import Editor from './components/editor/editor';
import Preview from './components/preview/preview';
import Toolbar from './components/toolbar/toolbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app__container">
          <div className="app__side">
            <Toolbar text='Editor' />
            <Editor markdown={this.state.markdown} onChange={this.handleChange} />
          </div>
          <div className="app__side app__side_right">
            <Toolbar text='Previewer' />
            <Preview markdown={this.state.markdown} />
          </div>
        </div>
      </div>
    );
  }
}

export default App
