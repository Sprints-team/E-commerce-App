import { Container } from "@mantine/core";
import Cover from "./../components/Header/Cover";
import Sections from "./../components/Sections/Sections";

const Home = () => {
  return (
    <>
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
