import React, { Component } from "react";
import axios from 'axios';

class CalcHistory extends Component {
// GET call here
componentDidMount() {
    this.fetchHistory();
}
fetchHistory = () => {
    axios.get('/api/calculator')
        .then((response) => {
            this.setState({
                ...this.state,
                history: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
}
  render() {
    return (
      <>
        <div>
            <h2>History</h2>
           
            </div>
      </>
    );
  }
}
export default CalcHistory;
