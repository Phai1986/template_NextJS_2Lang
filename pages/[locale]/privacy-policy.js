import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import css from "../../styles/Policy.module.scss"

const banner_bg = "../../images/banner_policy.jpg"

const Privacy_Policy = () => {

    const { t } = useTranslation(['privacy', 'common', 'footer', 'header'])

    return (
        <>
            <Header heading={t('h1')} title={t("privacy:Privacy.0.title")} />
            <section className={css.policy}>
                <div className={css.banner} style={{ backgroundImage: `url(` + banner_bg + `)` }}>
                    <Container className={css.text_center}>
                        <h1>{t("privacy:Privacy.0.title")}</h1>
                        <h2>{t("privacy:Privacy.0.sub_title")}</h2>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col lg={12} xs={12} className={css.content}>
                            <div className={css.desc} dangerouslySetInnerHTML={{ __html: t("privacy:Privacy.0.html") }}></div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Privacy_Policy

const getStaticProps = makeStaticProps(['privacy', 'common', 'footer', 'header'])
export { getStaticPaths, getStaticProps }