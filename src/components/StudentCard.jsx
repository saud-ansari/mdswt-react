function StudentCard({ student, onDelete, onUpdate }) {
  const result = student.marks >= 40 ? "Pass" : "Fail";

  return (
    <div className="col-4">
      <div className="card shadow-sm p-5 text-center bg-light">
        <h3>{student.name}</h3>
        <p>Email: {student.email}</p>
        <p>Course: {student.course}</p>
        <p>Marks: {student.marks}</p>
        <p>Result: {result}</p>
        <button
          className="btn btn-primary mb-2"
          onClick={() => onUpdate(student.id)}
        >
          Update Marks (+5)
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
