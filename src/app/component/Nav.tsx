import styles from '../styles/Home.module.css'

export default function NavBar() {
    return (
        <>
            <div className={styles.coloredasia}>
                <nav className={styles.navcontainer}>
                    <ul className={styles.navbar}>
                        <li className={styles.navitems}><a href="#">HOME</a></li>
                        <li className={styles.navitems}>
                            <a href="#" className="expi">
                                EXPIDITION

                            </a>
                            <ul className={styles.subnav}>
                                <li><a href="#">ABCD</a></li>
                                <li><a href="#">ABCD</a></li>
                                <li><a href="#">ABCD</a></li>
                                <li><a href="#">ABCD</a></li>
                            </ul>
                        </li>
                        <li className={styles.navitems}>
                            <a href="#" className="expi">
                                TREKS
                            </a>
                            <ul className={styles.subnav}>
                                <li><a href="#">EFGH</a></li>
                                <li><a href="#">EFGH</a></li>
                                <li><a href="#">EFGH</a></li>
                                <li><a href="#">EFGH</a></li>
                            </ul>
                        </li>
                        <li className={styles.navitems}>
                            <a href="#" className="expi">
                                CULTURE & HERITAGES TOURS
                            </a>
                            <ul className={styles.subnav}>
                                <li><a href="#">IJKL</a></li>
                                <li><a href="#">IJKL</a></li>
                                <li><a href="#">IJKL</a></li>
                                <li><a href="#">IJKL</a></li>
                            </ul>
                        </li>
                        <li className={styles.navitems}>
                            <a href="#" className="expi">
                                SAFARI
                            </a>
                            <ul className={styles.subnav}>
                                <li><a href="#">MNOP</a></li>
                                <li><a href="#">MNOP</a></li>
                                <li><a href="#">MNOP</a></li>
                                <li><a href="#">MNOP</a></li>
                            </ul>
                        </li>
                        <li className={styles.navitems}>
                            <a href="#" className="expi">
                                OUR SERVICES
                            </a>
                            <ul className={styles.subnav}>
                                <li><a href="#">QRST</a></li>
                                <li><a href="#">QRST</a></li>
                                <li><a href="#">QRST</a></li>
                                <li><a href="#">QRST</a></li>
                            </ul>
                        </li>
                        <li className={styles.navitems}><a href="#">ABOUT</a></li>
                        <li className={styles.navitems}><a href="#">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
     
        </>
    )
}