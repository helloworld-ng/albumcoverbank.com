import React from "react";
import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={classes.Footer}>
      <span><a href="https://wuruwuru.com" target="_blank">wuruwuru</a></span>
      <span>&copy; 2023</span>
    </div>
  );
}
