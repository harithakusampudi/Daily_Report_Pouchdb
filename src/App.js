import React, { Component } from 'react';
import TaskManger from './screens/taskManager/container';

export default class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <TaskManger/>
      </div>
    )
  }
}