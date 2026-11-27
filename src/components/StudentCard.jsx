function StudentCard({

    name,
    email,
    course,
    age,
    marks,
    image,
    college = "College Not Assigned"

}) {

    const result = marks >= 35 ? "Passed" : "Failed";

    return (

        <div className="student-card">

            <img
                src={image}
                alt={name}
                className="student-image"
            />

            <h2>{name}</h2>

            <p>Email: {email}</p>

            <p>Age: {age}</p>

            <p>Course: {course}</p>

            <p>Marks: {marks}</p>

            <p>College: {college}</p>

            <h3>
                Result: {result}
            </h3>

        </div>

    );

}

export default StudentCard;
