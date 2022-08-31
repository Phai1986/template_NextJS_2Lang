import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LanguageSwitchLink from './LanguageSwitchLink'
import pkg from 'next-i18next/package.json'
import pkgLD from 'next-language-detector/package.json'
import i18nextConfig from '../next-i18next.config';
import Link from '../components/Link'

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Iframe from 'react-iframe'
import css from "../styles/Footer.module.scss"

const img1 = "/images/logo_footer.svg"
const img2 = "/images/i_location.svg"
const img3 = "/images/i_tel.svg"
const img4 = "/images/i_fax.svg"

export const Footer = () => {
  const router = useRouter()
  const { t } = useTranslation('footer')
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;


  return (
    <>
      <footer className={css.footer}>
        <Container>
          <Row className={css.footer_top}>
            <Col>
              <span className={css.logo_footer}></span>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md="6">
              <p>
                <span className={css.location}></span>
                <strong>{t("sub1")}</strong>
              </p>
              <p>
                <span className={css.tel}></span>
                <strong>034-440-681, 034-440-682</strong>
              </p>
              <p>
                <span className={css.fax}></span>
                <strong>034-440-683</strong>
              </p>
            </Col>
            <Col lg={3} md="6">
              <h3>{t("sub2")}</h3>
              <ul className={css.menu_footer}>
                <li><Link href="/join-us"><a>{t("sub3")}</a></Link></li>
                <li><Link href="/reported"><a>{t("sub4")}</a></Link></li>
                <li><Link href="/cookie-policy"><a>{t("sub5")}</a></Link></li>
                <li><Link href="/privacy-policy"><a>{t("sub6")}</a></Link></li>
              </ul>
              <p>{t("sub7")} <br />+6663 156 1442 EXPORT@JDFTHAILAND.COM</p>
            </Col>
            <Col>
              <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15517.15577513294!2d100.1397757!3d13.5178512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2b94899516fa7%3A0xd54a0096a49464d7!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4iOC4lOC4teC4n-C4ueC5ieC4lCDguIjguLPguIHguLHguJQgKOC4oeC4q-C4suC4iuC4mSkgKOC4quC4s-C4meC4seC4geC4h-C4suC4meC5g-C4q-C4jeC5iCk!5e0!3m2!1sth!2sth!4v1608722054162!5m2!1sth!2sth"
                width="80%"
                height="200px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
            </Col>
          </Row>
        </Container>
        <div className={css.footer_bottom}>
          <Container className="text-center">
            <span>COPYRIGHT © 2021 JD FOOD PUBLIC COMPANY LIMITED. ALL RIGHTS RESERVED.</span>
          </Container>
        </div>
      </footer>
    </>
  )
}
