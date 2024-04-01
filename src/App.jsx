{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import { getAllPosts } from "./services/getAllPosts.js";
import { getAllTopics } from "./services/getAllTopics.js";

import { NavDropdown, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Row from "react-bootstrap/Row";

export const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [allTopics, setAllTopics] = useState([]);

  //get employees from DB and set to employees state var
  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setAllPosts(postsArray);
    });
    getAllTopics().then((topicsArray) => {
      setAllTopics(topicsArray);
    });
  }, []);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Learning Moments</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="All Posts" id="basic-nav-dropdown">
              {allTopics.map((topicObj) => (
                <NavDropdown.Item href={`#${topicObj.id}`} key={topicObj.id}>
                  {topicObj.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link href="#my-posts">My Posts</Nav.Link>
            <Nav.Link href="#favorites">Favorites</Nav.Link>
            <Nav.Link href="#new-post">New Post</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          {allPosts.map((postObj) => {
            return (
              <Card
                className="text-center"
                style={{ width: "12rem" }}
                key={postObj.id}
              >
                <Card.Body>
                  <Card.Title>{postObj.title}</Card.Title>
                  <Card.Text>{postObj.topic.name}</Card.Text>
                  <br></br>
                  <Button variant="outline-info" size="sm">
                    Likes: {postObj.likes.length}
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
