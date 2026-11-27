function CourseCard({ name, duration, fees }) {

    return (
        <div className="card shadow-sm h-100">

            <div className="card-body">

                <h5 className="card-title">
                    {name}
                </h5>

                <p className="card-text">
                    Duration: {duration}
                </p>

                <p className="card-text">
                    Fees: ₹{fees}
                </p>

                <button className="btn btn-primary">
                    View Course
                </button>

            </div>

        </div>
    );
}

export default CourseCard;
