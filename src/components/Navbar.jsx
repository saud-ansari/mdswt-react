function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <a className="navbar-brand" href="/">
                    EduConnect
                </a>

                <div className="navbar-nav ms-auto">

                    <a className="nav-link active" href="/">
                        Dashboard
                    </a>

                    <a className="nav-link" href="/courses">
                        Courses
                    </a>

                    <a className="nav-link" href="/profile">
                        Profile
                    </a>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;
