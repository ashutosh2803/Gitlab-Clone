import React from 'react'
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.navbarLeftWrapper}>
                <div className={styles.logo}><img src="https://about.gitlab.com/images/press/logo/jpg/gitlab-logo-gray-rgb.jpg" alt="logo" /></div>
                <div>Product</div>
                <div>Solutions</div>
                <div>Resources</div>
                <div>Partners</div>
                <div>Pricing</div>
                <div>Support</div>
            </div>
            <div className={styles.navbarRightWrapper}>
                <div><img src="https://image.shutterstock.com/image-vector/magnifying-glass-search-icon-flat-260nw-738763579.jpg" alt="search_logo" /></div>
                <div className={styles.navbarRightButton}><button>Get free trial</button></div>
                <div>Login</div>
            </div>
        </div>
    )
}

export { Navbar };
