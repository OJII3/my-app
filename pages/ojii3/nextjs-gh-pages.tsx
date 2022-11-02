import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarComponent from '../../components/navbar'
import Footer from '../../components/footer'

export default () => {
  return (
    <>
      <Head>
        <title>Next.js × GitHub Pages - OJII3</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent />

      <main>
        <Container fluid className='fade-up'>
          <Row className='p-5'>
            <h1 className='text-center'>
              Next.js × Github Pages × Github Actions
            </h1>
          </Row>
          <Row>
            <h2 className='text-center'>in TypeScript</h2>
          </Row>

          <p className={styles.description}>
            See code in{' '}
            <a href='https://github.com/ojii3/ojii3.github.io'>GitHub</a>
          </p>

        </Container>
      </main>

      <Footer />
    </>
  )
}