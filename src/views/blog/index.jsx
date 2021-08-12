import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog/blog-author";
import posts from "../../data/posts.json";
import "./styles.css";
class Blog extends Component {
  state = {
    blog: {},
    loading: true,
  };

  render() {
    const { loading, blog } = this.state;
    if (loading) {
      return <div>loading</div>;
    } else {
      return (
        <div className="blog-details-root">
          <Container>
            {" "}
            {console.log(this.props.blogs)}
            <Image className="blog-details-cover" src={blog.cover} fluid />
            <h1 className="blog-details-title">{blog.title}</h1>
            <div className="blog-details-container">
              <div className="blog-details-author">
                <BlogAuthor {...blog.author} />
              </div>
              <div className="blog-details-info">
                <div>{blog.createdAt}</div>
                <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </Container>
          <Container>
            {this.props.blogs.map((blog) => (
              <div>{blog.title}</div>
            ))}
          </Container>
        </div>
      );
    }
  }
}

export default withRouter(Blog);
