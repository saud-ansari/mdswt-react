import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import CourseCard from "./components/CourseCard";

function App() {

    return (
        <div>

            <Navbar />

            <div className="container my-4">

                <h2 className="mb-4">
                    Student Dashboard
                </h2>

                {/* Dashboard Statistics */}

                <div className="row g-3 mb-4">

                    <div className="col-12 col-md-4">
                        <StatCard
                            title="Total Students"
                            value="250"
                            color="primary"
                        />
                    </div>

                    <div className="col-12 col-md-4">
                        <StatCard
                            title="Active Courses"
                            value="12"
                            color="success"
                        />
                    </div>

                    <div className="col-12 col-md-4">
                        <StatCard
                            title="Completed Courses"
                            value="85"
                            color="warning"
                        />
                    </div>

                </div>

                {/* Course Section */}

                <h3 className="mb-3">
                    Available Courses
                </h3>

                <div className="row g-3">

                    <div className="col-12 col-md-6 col-lg-4">
                        <CourseCard
                            name="ReactJS"
                            duration="40 Days"
                            fees="15,000"
                        />
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <CourseCard
                            name="PHP Development"
                            duration="30 Days"
                            fees="10,000"
                        />
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <CourseCard
                            name="Python"
                            duration="45 Days"
                            fees="12,000"
                        />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default App;
