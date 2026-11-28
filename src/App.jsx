import { useState } from "react";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul",
      email: "rahul@gmail.com",
      course: "ReactJS",
      marks: 85,
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com",
      course: "PHP",
      marks: 35,
    },
  ]);

  function addStudent(student) {
    setStudents((prevStudents) => [
      ...prevStudents,
      {
        ...student,
        id: Date.now(),
      },
    ]);
  }

  function deleteStudent(id) {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id),
    );
  }

  function updateMarks(id) {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              marks: student.marks + 5,
            }
          : student,
      ),
    );
  }

  return (
    <div className="container my-5">
      <h1>Student Management System</h1>
      <StudentForm onAddStudent={addStudent} />

      <StudentList
        students={students}
        onDelete={deleteStudent}
        onUpdate={updateMarks}
      />
    </div>
  );
}

export default App;
