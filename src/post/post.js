import SinglePost from "../singlePost/singlePost";

const { Component } = require("react");

class Post extends Component {
  state = {
    posts: [
      { title: "Post 1", description: "Post 1 description" },
      { title: "Post 2", description: "Post 2 description" },
    ],
    postTitle: "Post List",
    showPosts: true,
  };

  componentDidMount() {
    setTimeout(() => {
      const posts = [...this.state.posts]?.map((ele) => ({
        ...ele,
        title: `Modified ${ele.title}`,
      }));
      this.setState({ posts });
      this.setState({ postTitle: "Modified Post List" });
    }, 5000);
  }

  onClickHandler = () => {
    this.setState({ showPosts: !this.state.showPosts });
  };
  render() {
    return (
      <div>
        <h2>{this.state.postTitle}</h2>
        <button
          onClick={this.onClickHandler}
          style={{ color: "red", padding: "3px" }}
        >
          {this.state.showPosts ? "Hide Post" : "Show Post"}
        </button>
        <hr />
        {this.state.showPosts && (
          <div style={{ display: "flex" }}>
            {this.state.posts?.map((post, index) => (
              <SinglePost
                key={index}
                title={post.title}
                description={post.description}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Post;
