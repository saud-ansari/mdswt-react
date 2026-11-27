import StudentCard from './components/StudentCard';

import './App.css';

function App() {

    return (

        <div className="container">

            <h1>Student Profile Directory</h1>

            <div className="student-container">

                <StudentCard

                    name="Rahul Sharma"

                    email="rahul@gmail.com"

                    age={21}

                    course="ReactJS"

                    marks={85}

                    college="Vivek College"

                    image="https://placehold.co/200x200?text=Rahul"

                />

                <StudentCard

                    name="Priya Patil"

                    email="priya@gmail.com"

                    age={22}

                    course="Python"

                    marks={92}

                    college="Mumbai University"

                    image="https://placehold.co/200x200?text=Priya"

                />

                <StudentCard

                    name="Amit Shah"

                    email="amit@gmail.com"

                    age={20}

                    course="PHP"

                    marks={28}

                    college="City College"

                    image="https://placehold.co/200x200?text=Amit"

                />

            </div>

        </div>

    );

}

export default App;
