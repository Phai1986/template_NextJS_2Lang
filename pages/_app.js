import { appWithTranslation } from 'next-i18next'
import React, { useEffect, useState } from "react";
import Favicon from 'react-favicon';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos'
import "aos/dist/aos.css";



const MyApp = ({ Component, pageProps }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            {/* <script type="text/javascript" src="https://cookiecdn.com/cwc.js"></script>
            <script id="cookieWow" type="text/javascript" src="https://cookiecdn.com/configs/ySqETpPb2KtbQYgDdpJk2ujd" data-cwcid="ySqETpPb2KtbQYgDdpJk2ujd"></script> */}
            
            <Favicon url="JD_Food.svg"></Favicon>
            <Component {...pageProps} />
        </>
    )

}

export default appWithTranslation(MyApp)


