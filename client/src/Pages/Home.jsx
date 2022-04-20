import { Container,MantineProvider } from "@mantine/core";
import Cover from "../components/Header/Cover";
import Sections from "../components/Sections/Sections";
import Header from "../components/Header/Header"
import Navbar from "../components/Header/Navbar";

const Home = () => {
  return (
    <MantineProvider
    defaultProps={{
      Container: {
        sizes: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
    }}>
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
      </MantineProvider>
  );
};

export default Home;
