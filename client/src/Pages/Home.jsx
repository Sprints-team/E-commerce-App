import { Container } from "@mantine/core";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cover from "../components/Header/Cover";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Sections from "../components/Sections/Sections";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
