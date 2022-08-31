import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useRouter } from 'next/router'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import css from "../../styles/Policy.module.scss"

const banner_bg = "../../images/banner_policy.jpg"

const Reported = () => {
    const router = useRouter()
    const { t } = useTranslation(['Reported', 'common', 'footer', 'header'])

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        setValidated(true);
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            const formData = {
                name: event.target.name.value,
                phone: event.target.phone.value,
                email: event.target.email.value,
                message: event.target.message.value,
                subject: event.target.subject.value,
                detail: event.target.detail.value,
            }

            const subjectmail = `การร้องเรียนจากลูกค้า เรื่อง ${formData.subject}`;
            const body = `<h2>รายละเอียดการร้องเรียน</h2><p>รายละเอียด : ${formData.detail}</p><h2>ช่องทางการติดต่อกลับ</h2><p>ชื่อ-นามสกุล : ${formData.name}</p><p>อีเมล : ${formData.email}</p><p>เบอร์โทร : ${formData.phone}</p><p>ช่องทางการติดต่ออื่นๆ : ${formData.message}</p>`;

            let contactFormData = new FormData();
            contactFormData.append('subject', subjectmail);
            contactFormData.append('body', body);
            contactFormData.append('sender_email', 'info@jdfthailand.com');
            contactFormData.append('sender_name', 'JDFOOD');
            contactFormData.append('recipient_email', 'info@jdfthailand.com');
            callAPI(contactFormData).then(() => { router.reload('/reported') });
        }
    };

    const [num, setNum, setValue] = useState('');
    const handleNumChange = event => {
        const limit = 10;
        setNum(event.target.value.slice(0, limit));
    };

    const callAPI = async (data) => {
        try {
            const endpoint = 'https://dev.houseofdev.tech/hod-mailer/main_mailer.php'
            const options = {
                method: 'POST',
                headers: {
                    "Cookie": "__cfduid=d1595320804d4131774c100d3c66b56681608793935"
                },
                body: data,
            }
            const response = await fetch(endpoint, options)
            const result = await response.json()
            console.log('email return')
            console.log(result)
            alert("ทางบริษัทได้รับเรื่องของท่านแล้ว อาจมีเจ้าหน้าที่ติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม");
        } catch (err) {
            console.log(err);
            alert("เกิดข้อผิดพลาด กรุณาทดลองใหม่");
        }
        return true
    };

    return (
        <>
            <Header heading={t('h1')} title={t("Reported:title")} />
            <section className={css.policy}>
                <div className={css.banner} style={{ backgroundImage: `url(` + banner_bg + `)` }}>
                    <Container className={css.text_center}>
                        <h1>{t("Reported:title")}</h1>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col lg={12} xs={12} className={css.reported}>
                            <h2 className='text-center'>{t("Reported:title2")}</h2>
                            <div className={css.desc} dangerouslySetInnerHTML={{ __html: t("Reported:p") }}></div>
                            <Form className={css.form} noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className={css.row}>
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label>{t("Reported:name")}</Form.Label>
                                        <Form.Control type="text" placeholder={t("Reported:name")} name="name" required maxLength={40} />
                                    </Form.Group>
                                </Row>
                                <Row className={css.row}>
                                    <Form.Group as={Col} controlId="validationCustom02">
                                        <Form.Label>{t("Reported:phone")}</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder={t("Reported:phone")}
                                            required
                                            value={num}
                                            name="phone"
                                            onChange={handleNumChange}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="validationCustom03">
                                        <Form.Label>{t("Reported:email")}</Form.Label>
                                        <Form.Control type="email" placeholder={t("Reported:email")} name="email" required maxLength={40} />
                                    </Form.Group>
                                </Row>
                                <Row className={css.row}>
                                    <Form.Group as={Col} controlId="message">
                                        <Form.Label>{t("Reported:message")}</Form.Label>
                                        <Form.Control type="text" placeholder={t("Reported:message")} name="message" />
                                    </Form.Group>
                                </Row>
                                <Row className={css.row}>
                                    <Form.Group as={Col} controlId="validationCustom04">
                                        <Form.Label>{t("Reported:subject")}</Form.Label>
                                        <Form.Select aria-label="กรุณาเลือกหัวข้อการร้องเรียน" required as="select" name="subject">
                                            <option value="">กรุณาเลือกหัวข้อการร้องเรียน</option>
                                            <option value="พบการทุจริต และ/หรือ ข้อสงสัย ภายในหน่วยงานของบริษัท">พบการทุจริต และ/หรือ ข้อสงสัย ภายในหน่วยงานของบริษัท</option>
                                            <option value="พบการบกพร่องจของเจ้าหน้าที่ และ/หรือ พนักงานงานบริษัท">พบการบกพร่องจของเจ้าหน้าที่ และ/หรือ พนักงานงานบริษัท</option>
                                            <option value="พบการดำเนินงาน/กิจกรรม ที่ไม่โปร่งใสต่อผู้ถือหุ้น">พบการดำเนินงาน/กิจกรรม ที่ไม่โปร่งใสต่อผู้ถือหุ้น</option>
                                            <option value="แจ้งข้อร้องเรียนอื่นๆ">แจ้งข้อร้องเรียนอื่นๆ</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className={css.row}>
                                    <Form.Group as={Col} controlId="validationCustom05">
                                        <Form.Label>{t("Reported:detail")}</Form.Label>
                                        <Form.Control type="text" placeholder={t("Reported:detail")} required name="detail" />
                                    </Form.Group>
                                </Row>
                                <Row className={css.row}>
                                    <Button style={{ width: 180, margin: "40px auto 0" }} type="submit">{t("Reported:button")}</Button>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Reported

const getStaticProps = makeStaticProps(['Reported', 'common', 'footer', 'header'])
export { getStaticPaths, getStaticProps }