import React, { useState } from "react";
import DropMenu from "../DropMenu/index";
import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  const initialState = [
    {
      id: "0",
      title: "Home",
      items: [
        { id: "0", item: "Home Multi Vendor" },
        { id: "1", item: "Home Multi Vendor1" },
        { id: "2", item: "Home Multi Vendor2" }
      ]
    },
    {
      id: "1",
      title: "All Product",
      items: [{ id: "0", item: "Recent Item" }]
    },
    {
      id: "2",
      title: "Categories",
      items: [{ id: "0", item: "Popular Item" }]
    },
    { id: "3", title: "Elements", items: [{ id: "0", item: "Accordion" }] },
    {
      id: "4",
      title: "Pages",
      items: [
        { id: "0", item: "Menu item" },
        { id: "1", item: "Menu item1" },
        { id: "2", item: "Menu item2" }
      ]
    }
  ];

  const [menu, setMenu] = useState(initialState);

  return (
    <div className={styles.mainNav}>
      {menu.map(el => {
        return <DropMenu key={el.id} title={el.title} items={el.items} />;
      })}
    </div>
  );
};

export default Navbar;
