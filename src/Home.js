import React from 'react'
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button2 from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { Container } from 'react-bootstrap';

import logo from './assets/1.jpg';

const Home = ({ handlelogout, email }) => {
    const [itemCount, setItemCount] = React.useState(1);
    return (
        <div>


            <section className="hero">
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" style={{ color: 'white' }}>Navbar with text</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className='button'>
                                <button onClick={handlelogout}>Logout</button>

                            </Navbar.Text>
                            <Badge color="secondary" badgeContent={itemCount}>
                                <ShoppingCartIcon  style={{color:'white'}}/>{" "}
                            </Badge>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <h2 style={{ color: 'white' }}>Cards Display</h2>
                    <Row style={{ marginTop: '20px' }} className="mx-0">
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={logo} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => {
                                        setItemCount(itemCount + 1);
                                    }}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={logo} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={logo} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </div>
                <div className="gallery">
                    <h1 style={{ color: 'white', textAlign: 'center' }}>GAllery Box </h1>
                    <Row>
                        <Col><img
                            className="gallery-img"
                            src={logo}
                            alt="A image to apply the div plugin"
                        /></Col>
                        <Col><img
                            className="gallery-img"
                            src={logo}
                            alt="A image to apply the div plugin"
                        /></Col>
                        <Col><img
                            className="gallery-img"
                            src={logo}
                            alt="A image to apply the div plugin"
                        /></Col>
                        <Col><img
                            className="gallery-img"
                            src={logo}
                            alt="A image to apply the div plugin"
                        /></Col>
                    </Row>
                </div>
                <div className="gallery">
                    <Row>
                        <Col><img
                            className="gallery-img"
                            src={logo}
                            alt="A image to apply the div plugin"
                        /></Col>
                        <Col><img
                            className="gallery-img"
                            src={logo}
                            alt="A image to apply the div plugin"
                        /></Col>
                        <Col><img
                            className="gallery-img"
                            src={logo}
                            alt="A image to apply the div plugin"
                        /></Col>
                        <Col><img
                            className="gallery-img"
                            src={logo}
                            alt="A image to apply the div plugin"
                        /></Col>
                    </Row>
                </div>
            </section>
            <footer class="footer">
                <div>Heading for footer</div>
                <Row>
                    <Col> Hello</Col>
                    <Col>
                        <ul style={{ listStyle: 'none' }}>
                            <li>sociallink</li>
                            <li>sociallink</li>
                            <li>sociallink</li>
                        </ul>
                    </Col>
                </Row>

            </footer>

        </div>
    )
}

export default Home;