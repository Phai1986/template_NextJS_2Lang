import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Link from '../../components/Link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import css from "../../styles/Index.module.scss"




const Homepage = () => {
  const { t } = useTranslation(['common', 'header', 'footer', 'index-page'])

  const videoRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
    }, 2000)
  }, []);

  return (
    <>
      <Header heading={t('h1')} title={t('index_title')} />
      <div className={css.index}>

        <div className={css.banner_jdf}>
          <div className={css.bg}>
            <Link className={css.crop_vdo} href="https://www.youtube.com/watch?v=cgOnR4cg-x4" target="_blank">
              <video
                ref={videoRef}
                controls
                width="250"
                loop
                muted
                className={css.video}
              >
                <source src="../vdo/vdo.mp4" type="video/mp4" />
              </video>
            </Link>

            <div className={css.content_left}>
              <div>
                <h1>{t("index-page:sec1.0.h1")}</h1>
                <p>{t("index-page:sec1.0.p")}</p>
                <Link href="#jdf_detail" className={css.readmore}><a>{t("readmore")}</a></Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common', 'header', 'footer', 'index-page'])
export { getStaticPaths, getStaticProps }
