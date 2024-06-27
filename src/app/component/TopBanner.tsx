import Image from "next/image"
import styles from "/public/styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { WhatsApp } from "@mui/icons-material";

export default function TopBanner() {
    return (
        <Box  >
            <div className={styles.whitetop}>
                <Link href="/" style={{textDecoration:'none'}} prefetch={true}>
                    <Box className={styles.topleft}>
                        <Image alt="image logo" src="/images/logos/logo-top.png" width={100} height={100} />
                        <span className={styles.brandname}>Expedition Asia Treks & Tours Pakistan</span>

                    </Box>
                </Link>
                <Box className={styles.topright} sx={{ my: 2, mx: 5 }}>
                    {/* <span>
                        Call Us
                        <span className={styles.orange}>24</span>
                        <span className={styles.green}>/7</span>
                    </span>
                    <br /> */}
                    <div className="top-banner-right wrapper">
                        <div className="top-banner right">
                            <div>
                                <a className="phone-wrapper" target="_blank" href=" https://wa.me/+923004708813">
                                    <div className="number">
                                        <span className="top-banner phone" >+92(300)4708813</span>
                                    </div>
                                    <div className="icon">
                                        <WhatsApp />
                                    </div>
                                </a>
                            </div>
                            <div className="email-wrapper">
                                <a className="top-banner email" target="_blank" href="mailto:expeditionasiaa@gmail.com">expeditionasiaa@gmail.com</a>
                            </div>
                        </div>

                        {/* <div className="login-wrapper">
                            <a className="top-banner login" href="/login"><ManageAccountsOutlinedIcon /></a>
                        </div> */}

                    </div>
                </Box>

            </div>

        </Box>
    )
}