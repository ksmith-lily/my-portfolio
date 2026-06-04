
import Container from "../components/Container";
import Hero from "../components/Hero";
import Work from "../components/Work";

function Home() {
  return (
    <Container>
      <div className="min-h-screen border-l border-r border-b border-gray-200 dark:border-zinc-800">
        <Hero />
        <Work />
      </div>

    </Container>
  )
}

export default Home;