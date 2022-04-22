import { Container } from "@mantine/core";
import Cover from "../components/Header/Cover";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Sections from "../components/Sections/Sections";

const Home = () => {
  return (
    <>
      <Header>
        <Container size='xl'>
          <Navbar />
        </Container>
      </Header>
      <Container size='xl'>
        <Cover />
      </Container>
      <Container size='lg'>
        <Sections />
      </Container>
    </>
  );
};

export default Home;
