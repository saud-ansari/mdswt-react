import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    marks: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddStudent({
      ...student,
      marks: Number(student.marks),
    });

    setStudent({
      name: "",
      email: "",
      course: "",
      marks: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form card shadow-sm p-4 mb-4 bg-info-subtle"
    >
      <h2>Register Student</h2>

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        className="form-control mb-3"
        value={student.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-control mb-3"
        value={student.email}
        onChange={handleChange}
        required
      />

      <select
        name="course"
        className="form-select mb-3"
        value={student.course}
        onChange={handleChange}
        required
      >
        <option value="">Select Course</option>
        <option value="ReactJS">ReactJS</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
      </select>

      <input
        type="number"
        name="marks"
        placeholder="Marks"
        className="form-control mb-3"
        value={student.marks}
        onChange={handleChange}
        min="0"
        max="100"
        required
      />

      <button type="submit" className="btn btn-primary">
        Register Student
      </button>
    </form>
  );
}

export default StudentForm;
