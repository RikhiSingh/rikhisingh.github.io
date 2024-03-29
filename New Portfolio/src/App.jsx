// import scss
import "./app.scss"
import Navbar from "./componenets/navbar/Navbar";
import Sidebar from "./componenets/sidebar/Sidebar";

const App = () => {
  return <div>
    <section>
      <Navbar />
    </section>
    <section>
      <Sidebar />
    </section>
    <section>Services</section>
    <section>Parallax</section>
    <section>Portfolio</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section>
  </div>;
};

export default App;
