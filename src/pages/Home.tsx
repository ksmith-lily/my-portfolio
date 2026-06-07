
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
        <section id="home">
          <Hero />
          <Summary />
        </section>
        <section id="tech-stack">
          <Skills />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="education">
          <Education />
        </section>
      </div>

    </Container>
  )
}

export default Home;