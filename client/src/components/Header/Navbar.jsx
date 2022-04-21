import { Search } from "tabler-icons-react";
import { User } from "tabler-icons-react";
import { Bell } from "tabler-icons-react";
import { ThemeIcon, Burger, Drawer } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "../../styles/Header/Navbar.module.scss";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  return (
    <ul className={classes.container}>
      <li className={classes.logo}>
        <Link to='/'>Sprints</Link>
      </li>
      <Drawer
        styles={{
          title: { fontSize: "2rem" },
          closeButton: { backgroundColor: "#eee" },
        }}
        opened={opened}
        onClose={() => setOpened(false)}
        title='ALL'
        padding='xl'
        size='xl'
        transitionDuration={300}
        transitionTimingFunction='ease'
        transition='slide-right'>
        <ul className={classes.drawerLinks}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>Shop</li>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
        </ul>
      </Drawer>
      <li className={classes.nav}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>Shop</li>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
        </ul>
      </li>

      <li>
        <ul className={classes.icons}>
          <li className={classes.burger}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
            />
          </li>
          <li>
            <ThemeIcon className={classes.searchIcon}>
              <Search size={48} strokeWidth={2} />
            </ThemeIcon>
          </li>
          <li>
            <ThemeIcon className={classes.searchIcon}>
              <User size={48} strokeWidth={2} />
            </ThemeIcon>
          </li>
          <li>
            <ThemeIcon className={classes.searchIcon}>
              <Bell
                size={48}
                strokeWidth={2}
                sx={{
                  "&:hover": { color: "red" },
                }}
              />
            </ThemeIcon>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
