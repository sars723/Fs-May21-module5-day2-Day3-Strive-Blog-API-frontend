import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";

export default class NewBlogPost extends Component {
  state = {
    blogs: {
      name: "",
      title: "",
      text: "",
      category: "",
      cover: "",
      comment: "",
    },
  };

  postBlog = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/Blogs`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.state.blogs),
      });
      if (response.status === 201) {
        alert("blog posted");
        this.setState({
          blogs: {
            name: "",
            title: "",
            text: "",
            category: "",
            cover: "",
            comment: "",
          },
        });
      } else {
        alert("we had a problem, try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (key, value) => {
    this.setState({
      blogs: {
        ...this.state.blogs,
        [key]: value,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.postBlog();
  };
  reset = () => {
    this.setState({
      blogs: {
        name: "",
        title: "",
        text: "",
        category: "",
        cover: "",
        comment: "",
      },
    });
  };
  render() {
    return (
      <Container className="new-blog-container">
        <Form className="mt-5" onSubmit={this.handleSubmit}>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Name"
              value={this.state.blogs.name}
              onChange={(e) => {
                this.handleChange("name", e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Title"
              value={this.state.blogs.title}
              onChange={(e) => {
                this.handleChange("title", e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Cover</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Cover"
              value={this.state.blogs.cover}
              onChange={(e) => {
                this.handleChange("cover", e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              size="lg"
              as="select"
              value={this.state.blogs.category}
              onChange={(e) => {
                this.handleChange("category", e.target.value);
              }}
            >
              <option>Category1</option>
              <option>Category2</option>
              <option>Category3</option>
              <option>Category4</option>
              <option>Category5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-content" className="mt-3">
            <Form.Label>Blog Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.blogs.text}
              onChange={(e) => {
                this.handleChange("text", e.target.value);
              }}
              /*  onChange={e=>this.setState({blogs:{text:e.target.value}})} */
              className="new-blog-content"
            />
          </Form.Group>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              size="lg"
              placeholder="comment"
              value={this.state.blogs.comment}
              onChange={(e) => {
                this.handleChange("comment", e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button
              type="reset"
              size="lg"
              variant="outline-dark"
              onClick={this.reset}
            >
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
