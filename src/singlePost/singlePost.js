import { Component } from "react";

class SinglePost extends Component {
  render() {
    return (
      <div
        style={{
          marginLeft: "50px",
          border: "1px solid lightgray",
          padding: "20px",
        }}
      >
        <div>{this.props.title}</div>
        <div>{this.props.description}</div>
      </div>
    );
  }
}
export default SinglePost;
