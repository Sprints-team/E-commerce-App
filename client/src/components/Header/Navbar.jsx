import { Badge, Burger, Drawer, ThemeIcon } from "@mantine/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "tabler-icons-react";
import classes from "../../styles/Header/Navbar.module.scss";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  const quantity = useSelector((state) => state.cart.quantity);
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
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/products'>SHOP</Link>
          </li>
          <li>
            <Link to='/products?gender=men'>MEN</Link>
          </li>
          <li>
            <Link to='/products?gender=women'>WOMEN</Link>
          </li>
          <li>
            <Link to='/products?gender=kids'>KIDS</Link>
          </li>
        </ul>
      </Drawer>
      <li className={classes.nav}>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/products'>SHOP</Link>
          </li>
          <li>
            <Link to='/products?gender=men'>MEN</Link>
          </li>
          <li>
            <Link to='/products?gender=women'>WOMEN</Link>
          </li>
          <li>
            <Link to='/products?gender=kids'>KIDS</Link>
          </li>
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
            <Link to='/'>
              <ThemeIcon className={classes.searchIcon}>
                <Search size={50} strokeWidth={2} />
              </ThemeIcon>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <ThemeIcon className={classes.profileIcon}>
                <User size={50} strokeWidth={2} />
              </ThemeIcon>
            </Link>
          </li>
          <li className={classes.cart}>
            <Link to='/cart'>
              <ThemeIcon className={classes.cartIcon}>
                <ShoppingCart size={50} strokeWidth={2} />
              </ThemeIcon>
              <Badge className={classes.badge}>
                {quantity > 99 ? "99+" : quantity}
              </Badge>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
