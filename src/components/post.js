import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <div>
          <li>{this.props.title}</li>
        </div>
        <div>
          <div>{this.props.associated_topics}</div>
        </div>
      </div>
    );
  }
}

export default Post;
