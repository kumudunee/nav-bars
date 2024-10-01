import { Link } from "react-router-dom";
import styles from './MainNavigation.module.css';


function MainNavigation () {
    return(
        <div>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.list}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Shop</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default MainNavigation;