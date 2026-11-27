function StudentCard({ student }) {

    return (
        <div>
            <h3>{student.name}</h3>

            <p>Course: {student.course}</p>

            <p>Marks: {student.marks}</p>
        </div>
    );
}

export default StudentCard;
