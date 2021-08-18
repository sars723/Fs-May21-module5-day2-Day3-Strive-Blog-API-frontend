import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  render() {
    return (
      <Row>
        {this.props.blogs.map((blog, key) => (
          <Col key={key} md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={blog.title} {...blog} />
          </Col>
        ))}
      </Row>
    );
  }
}
