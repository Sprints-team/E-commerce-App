import { Button } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import classes from "../../styles/Sections/Sections.module.scss";
import Cateogres from "./Cateogres";
import Collections from "./Collections";
import NewArrival from "./NewArrival";
import Statics from "./Statics";

const Sections = () => {
  const { scrollIntoView: scrollIntoCollection, targetRef: collectionRef } =
    useScrollIntoView({
      offset: 60,
    });
  const { scrollIntoView: scrollIntoNewArravail, targetRef: newArravailRef } =
    useScrollIntoView({
      offset: 60,
    });
  const { scrollIntoView: scrollIntoCateogres, targetRef: cateogresRef } =
    useScrollIntoView({
      offset: 60,
    });
  const { scrollIntoView: scrollIntoStatics, targetRef: staticsRef } =
    useScrollIntoView({
      offset: 60,
    });

  return (
    <div className={classes.container}>
      <nav>
        <Button
          variant='outline'
          color='red'
          onClick={() => scrollIntoCollection({ alignment: "start" })}>
          Collections
        </Button>
        <Button
          variant='outline'
          color='red'
          onClick={() => scrollIntoNewArravail({ alignment: "start" })}>
          New Arrivals
        </Button>
        <Button
          variant='outline'
          color='red'
          onClick={() => scrollIntoCateogres({ alignment: "start" })}>
          Cateogres
        </Button>
        <Button
          variant='outline'
          color='red'
          onClick={() => scrollIntoStatics({ alignment: "start" })}>
          Statics
        </Button>
      </nav>
      <div ref={collectionRef}>
        <Collections />
      </div>
      <div ref={newArravailRef}>
        <NewArrival />
      </div>
      <div ref={cateogresRef}>
        <Cateogres />
      </div>
      <div ref={staticsRef}>
        <Statics />
      </div>
    </div>
  );
};

export default Sections;
