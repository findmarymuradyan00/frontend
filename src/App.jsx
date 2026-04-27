import { useState } from 'react'
import UserList from './components/UserList'
import AddUser from './components/AddUser'

export default function App() {
  const [users, setUsers] = useState([])

  const handleSave = (newUser) => {
    setUsers([...users, newUser])
  }

  const handleDelete = (email) => {
    setUsers(users.filter((u) => u.email !== email))
  }

  return (
    <>
      <AddUser onSave={handleSave} />
      <UserList users={users} onDelete={handleDelete} />
    </>
  )
}