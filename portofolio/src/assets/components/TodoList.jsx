import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: "",
      description: "",
      deadline: "",
      isEditing: false,
      currentTodoIndex: -1,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addOrUpdateTodo = (event) => {
    event.preventDefault();
    const { name, description, deadline, isEditing, currentTodoIndex, todos } =
      this.state;

    if (name.trim() === "") {
      alert("Name is required");
      return;
    }

    const newTodo = { name, description, deadline };

    if (isEditing) {
      todos[currentTodoIndex] = newTodo;
      this.setState({ isEditing: false, currentTodoIndex: -1 });
    } else {
      todos.push(newTodo);
    }

    this.setState({ todos, name: "", description: "", deadline: "" });
  };

  editTodo = (index) => {
    const { name, description, deadline } = this.state.todos[index];
    this.setState({
      name,
      description,
      deadline,
      isEditing: true,
      currentTodoIndex: index,
    });
  };

  deleteTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  render() {
    return (
      <>
        <section id="todo">
          <div className="container bg-info rounded-2 py-3">
            <h1
              className="text-center fw-bold"
              style={{ fontFamily: "Playfair Display" }}
            >
              Todo List
            </h1>
            <form onSubmit={this.addOrUpdateTodo} id="Myform">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Task Name..."
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  placeholder="Task Description..."
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="deadline" className="form-label">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  className="form-control"
                  value={this.state.deadline}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  {this.state.isEditing ? "Update" : "Add"} Task
                </button>
              </div>
            </form>
          </div>
        </section>

        <section id="table-output">
          <div className="container">
            <h2 className="text-center">Todo List</h2>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Deadline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map((todo, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{todo.name}</td>
                    <td>{todo.description}</td>
                    <td>{todo.deadline}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => this.editTodo(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.deleteTodo(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
  }
}

export default TodoList;
