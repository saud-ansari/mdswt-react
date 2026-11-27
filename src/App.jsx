import Header from "./components/Header";

import Navbar from "./components/Navbar";

import CourseSection from "./components/CourseSection";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Navbar />

      <main>
        <section className="welcome">
          <h2>Welcome to Our Institute</h2>

          <p>Learn programming and build your professional career.</p>
        </section>

        <CourseSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
