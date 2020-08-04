import React from 'react';
import axios from 'axios';

export default class Main extends React.Component {
  state = {
    name: '',
    title:'',
    id: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };
//post 

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
//delete

      axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

//get
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos/4")
    .then((res) => {
      console.log(res);
      this.setState({ title: res.data.title,});
    });
  }

  render() {
    return (
      <div>
        <h2>Get</h2>
      <ul>
      Title :{this.state.title}
      </ul>
      <h2>Post</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
         
        </form>
     
        <h2>Delete</h2>
<form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button  type="submit">Delete</button>
        </form>
      </div>



    )
  }
}


