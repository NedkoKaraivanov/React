import { useState } from "react";
import { data } from '../data'

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const [nextId, setNextId] = useState(users.length + 1)

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) return;
    const newUser = { id: nextId, name: name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setNextId(nextId + 1);
    setName('');
    console.log(users);
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  }


  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <h2>Users:</h2>

        {users.map((user) => {
          return (
            <div key={user.id}>
              <h4>{user.name}</h4>
              <button type="button" className="btn" onClick={() => removeUser(user.id)}>Remove User</button>
            </div>
          );
        })}
      </form>
    </div>
  );
};
export default UserChallenge;
