import CourseCard from './CourseCard';

function CourseSection() {

    return (

        <section className="course-section">

            <h2>Our Popular Courses</h2>

            <div className="course-container">

                <CourseCard />

                <CourseCard />

                <CourseCard />

            </div>

        </section>

    );

}

export default CourseSection;
