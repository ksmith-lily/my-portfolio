
import Container from "../components/Container";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Summary from "../components/Summary";
import Work from "../components/Work";

function Home() {
  return (
    <Container>
      <div className="min-h-screen">
        <Hero />
        <Summary />
        <Skills />
        <Work />
        <Project />
        <Education />
      </div>

    </Container>
  )
}

export default Home;