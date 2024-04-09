import React from "react";
import styles from "./Header.module.scss"
import { VscCode } from "react-icons/vsc";
import { BiBookOpen } from "react-icons/bi";
import { GrCursor } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
function Header(){
    return(
        <div className={styles.header}>
            <Link to='/' >
                <div className={styles.homeLogo}><CiHome /></div>
            </Link>
            <div className={styles.rightRow}>
                <div className={styles.about}>
                    <BiBookOpen />
                    <p>About</p>
                </div>
                <Link to='/projects' style={{ textDecoration: 'none' }}>
                    <div className={styles.projects}>
                        <VscCode />
                        <p>Projects</p>
                    </div>
                </Link>
                <div className={styles.something}>
                    <GrCursor />
                    <p>Something</p>
                </div>
            </div>
        </div>
    )
}
export default Header