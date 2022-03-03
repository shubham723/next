import { Container } from 'react-bootstrap';
// import Carousel from '../components/Carousel';
import Feed from '../components/Feed';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      {/* <Carousel /> */}
      <Container fluid style={{ backgroundColor:'#f7f5f2' }} >
      <Feed />
      </Container>
      <Footer />
    </>
  )
}
