import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import css from '../../styles/Home.module.scss'

const Homepage = () => {
  const { t } = useTranslation(['404', 'common', 'footer', 'header'])

  return (
    <>
      <Header heading={t('h1')} title={t('title')} />
      <main>
        <div className={css.main}>
          <h1 style={{ fontSize: 200 }}>404 </h1>
          <p>{t('title')}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['404', 'common', 'footer', 'header'])
export { getStaticPaths, getStaticProps }
