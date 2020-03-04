import React from "react";
import styles from "./DropMenu.module.css";
import useHover from "../../shared/Usehover/index";
const DropMenu = ({ title, items }) => {
  const [ref, hovered] = useHover();

  return (
    <div ref={ref} className={styles.dropdown}>
      <a className={styles.dropbtn}>
        {title} <i className={styles.downArrow}></i>{" "}
      </a>
      {hovered && (
        <div className={styles.dropdownContent}>
          {items.map(el => {
            return <a key={el.id}>{el.item}</a>;
          })}
        </div>
      )}
    </div>
  );
};

export default DropMenu;
