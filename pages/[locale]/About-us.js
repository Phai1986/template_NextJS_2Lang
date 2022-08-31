import React from "react";
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import css from "../../styles/Aboutus.module.scss"




const Aboutus = () => {

  const { t } = useTranslation(['About-us', 'common', 'footer', 'header'])

  return (
    <>
      <Header heading={t('h1')} title={t("About-us:page")} />

      <section className={css.aboutus}>

        <div className={css.banner} style={{ backgroundImage: `url(` + t("About-us:banner.0.img") + `)` }}>
          <Container className={css.text_center}>
            <h1>{t("About-us:banner.0.h1")}</h1>
            <p>{t("About-us:banner.0.p")}</p>
          </Container>
        </div>


      </section>

      <Footer />
    </>
  )
}

export default Aboutus

const getStaticProps = makeStaticProps(['About-us', 'common', 'footer', 'header'])
export { getStaticPaths, getStaticProps }