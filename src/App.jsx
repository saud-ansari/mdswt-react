import StudentCard from "./components/StudentCard";

function App() {
  const students = [
    {
      id: 1,
      name: "Rahul",
      course: "ReactJS",
      marks: 85,
    },
    {
      id: 2,
      name: "Priya",
      course: "PHP",
      marks: 91,
    },
    {
      id: 3,
      name: "Amit",
      course: "Python",
      marks: 76,
    },
  ];

  return (
    <div>
      <h2>Student Directory</h2>

      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default App;
