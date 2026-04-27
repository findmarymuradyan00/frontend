export default function UserList({ users, onDelete }) {
  return (
    <div className="container mt-5">
      <h2>User List</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Profession</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.email}>
              <td>{u.name}</td>
              <td>{u.surname}</td>
              <td>{u.age}</td>
              <td>{u.profession}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => onDelete(u.email)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {users.length === 0 && <p>No users yet</p>}
    </div>
  )
}