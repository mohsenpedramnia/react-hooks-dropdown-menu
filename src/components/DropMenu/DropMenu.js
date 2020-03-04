import React, { useState, useRef, useEffect } from "react";
import styles from "./DropMenu.module.css";

const useHover = () => {
  const ref = useRef();

  const [hovered, setHovered] = useState(false);
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);
    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, [ref]);
  return [ref, hovered];
};

const DropMenu = () => {
  const [ref, hovered] = useHover();
  return (
    <div ref={ref} className={styles.dropdown}>
      <button className={styles.dropbtn}>Show menu</button>
      {hovered && (
        <div className={styles.dropdownContent}>
          <button> Menu item 1 </button>
          <button> Menu item 2 </button>
          <button> Menu item 3 </button>
        </div>
      )}
    </div>
  );
};

export default DropMenu;
