import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from './MainNavigation.module.css';

function MainNavigation() {
  const navRef = useRef();
  const indicatorRef = useRef();

  useEffect(() => {
    const navItems = gsap.utils.toArray(navRef.current.querySelectorAll("li"));
    navItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const rect = item.getBoundingClientRect();
        gsap.to(indicatorRef.current, {
          x: rect.left,
          width: rect.width,
          ease: "power2.out",
          duration: 0.4,
        });
      });
    });
    // Reset when not hovering any item
    navRef.current.addEventListener("mouseleave", () => {
      gsap.to(indicatorRef.current, { width: 0, duration: 0.4 });
    });
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <nav>
          <ul ref={navRef} className={styles.list}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <div ref={indicatorRef} className={styles.indicator}></div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
