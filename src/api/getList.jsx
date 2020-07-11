import React, { Component } from 'react';
import axios from 'axios';

export default class GetList extends Component {
  constructor() {
    super();
    this.state = {
      student: [],
    };
  }

  componentDidMount() {
    axios.get('api/mock/47/test/student')
      .then(({ data }) => {
        if (data.data && data.data.student) {
          this.setState({
            student: data.data.student,
          });
        }
      });
  }

  render() {
    const { student } = this.state;
    return (
      <ul>
        {
          student.map((item) => <li key={item.name}>{item.name}</li>)
        }
      </ul>
    );
  }
}
