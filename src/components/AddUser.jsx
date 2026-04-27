import { useState } from 'react'

export default function AddUser({ onSave }) {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: "",
    profession: "",
    email: ""
  })

  const [errors, setErrors] = useState({})

  const validate = (name, value) => {
    let message = ""

    if (name === "name" || name === "surname" || name === "profession") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        message = "Must not contain numbers"
      }
    }

    if (name === "age") {
      const num = Number(value)
      if (num < 1 || num > 110) {
        message = "Invalid age"
      }
    }

    if (name === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = "Invalid email"
      }
    }

    return message
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })

    setErrors({
      ...errors,
      [name]: validate(name, value)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const hasErrors = Object.values(errors).some(Boolean)
    const hasEmptyFields = Object.values(form).some(v => v.trim() === "")

    if (hasErrors || hasEmptyFields) {
        alert("wrong input")
        return
    }

    onSave(form)

    setForm({
      name: "",
      surname: "",
      age: "",
      profession: "",
      email: ""
    })

    setErrors({})
  }

  const inputClass = (field) =>
    `form-control ${errors[field] ? "is-invalid" : ""}`

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Fill in</h2>

      <form onSubmit={handleSubmit} className="row g-3">

        <div className="col-md-6">
          <input
            className={inputClass("name")}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <div className="invalid-feedback">{errors.name}</div>
        </div>

        <div className="col-md-6">
          <input
            className={inputClass("surname")}
            name="surname"
            value={form.surname}
            onChange={handleChange}
            placeholder="Surname"
          />
          <div className="invalid-feedback">{errors.surname}</div>
        </div>

        <div className="col-md-4">
          <input
            className={inputClass("age")}
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
          />
          <div className="invalid-feedback">{errors.age}</div>
        </div>

        <div className="col-md-4">
          <input
            className={inputClass("profession")}
            name="profession"
            value={form.profession}
            onChange={handleChange}
            placeholder="Profession"
          />
          <div className="invalid-feedback">{errors.profession}</div>
        </div>

        <div className="col-md-4">
          <input
            className={inputClass("email")}
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary w-100" type="submit">
            Submit form
          </button>
        </div>

      </form>
    </div>
  )
}