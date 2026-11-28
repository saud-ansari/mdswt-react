import StudentCard from "./StudentCard";

function StudentList({ students, onDelete, onUpdate }) {
  return (
    <div className="mt-5">
      <h2>Registered Students</h2>

      <div className="row g-5">
        {students.length > 0 ? (
          students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))
        ) : (
          <p>No Students Found</p>
        )}
      </div>
    </div>
  );
}

export default StudentList;
