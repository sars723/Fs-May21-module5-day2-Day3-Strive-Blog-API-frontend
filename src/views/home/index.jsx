import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";

export default class Home extends Component {
  state = {
    blogs: [],
  };
  getBlogs = async () => {
    try {
      console.log(process.env.REACT_APP_BE_PROD_URL);
      const response = await fetch(`${process.env.REACT_APP_BE_DEV_URL}/blogs`);
      console.log(response);
      if (response.ok) {
        const fetchedBlogs = await response.json();
        console.log(fetchedBlogs);
        this.setState({ blogs: fetchedBlogs.blogs });
        /* console.log(this.state.blogs); */
      }
    } catch (error) {}
  };
  componentDidMount = () => {
    this.getBlogs();
  };
  render() {
    return (
      <Container fluid="sm">
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        {/* <div>{this.state.blogs.map(blog=>
          <div>{blog.title}</div>
        )}</div> */}
        {console.log(this.state.blogs)}
        {this.state.blogs && <BlogList blogs={this.state.blogs} />}
      </Container>
    );
  }
}
