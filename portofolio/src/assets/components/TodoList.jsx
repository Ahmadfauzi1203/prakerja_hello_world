import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [deletedCount, setDeletedCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      name,
      description,
      deadline,
    };

    if (isEditing) {
      const updatedTodos = todos.map((todo, index) =>
        index === currentIndex ? newTodo : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setTodos([...todos, newTodo]);
    }

    setName("");
    setDescription("");
    setDeadline("");
  };

  const handleEdit = (index) => {
    const todo = todos[index];
    setName(todo.name);
    setDescription(todo.description);
    setDeadline(todo.deadline);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setDeletedCount(deletedCount + 1);
  };

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
          <form onSubmit={handleSubmit} id="Myform">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                {isEditing ? "Update Todo" : "Add Todo"}
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
              {todos.map((todo, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{todo.name}</td>
                  <td>{todo.description}</td>
                  <td>{todo.deadline}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <p>Total Tasks Deleted/Completed: {deletedCount}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
