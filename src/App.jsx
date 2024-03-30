{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const App = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Learning Moments</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">All Posts</Nav.Link>
            <Nav.Link href="#my-posts">My Posts</Nav.Link>
            <Nav.Link href="#favorites">Favorites</Nav.Link>
            <Nav.Link href="#new-post">New Post</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Card className="text-center" style={{ width: "12rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <br></br>
            <Button variant="outline-info" size="sm">
              Henry/Charlie
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
