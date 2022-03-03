import Image from "next/image";
import { Card, Col, Container, Row } from "react-bootstrap";
import banner from '../assets/Images/banner.jpg';

const Feed = () => {
    return (
        <>
            <Container>
                <Row xs={12} md={12}>
                    <Col>
                        <Image src={banner} height={500} alt={'blog'} />
                    </Col>
                </Row>
                <Row xs={12} md={12}>
                    <Col>
                        <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                        </p>
                        <Image className="authorImg" src={banner} height={60} width={80} alt={"author"} /> by Shubham
                    </Col>
                </Row>
            </Container>

            {/* Categories */}
            <Container className="mt-5">
            <h2>Popular Categories</h2>
            <section> Lorem Ipsum is simply dummy text of the printing and typesetting industry </section>
            
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Image variant="left" src={banner} alt={'Top Categories'} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Feed