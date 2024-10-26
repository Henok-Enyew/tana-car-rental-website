import Hero from "./Hero";
import Nav from "./Nav";

function Homepage() {
  return (
    <main className="bg-primary-bg " id="home">
      <Nav />
      <Hero />
    </main>
  );
}

export default Homepage;
