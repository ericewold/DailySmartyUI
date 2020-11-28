import React, { Component } from "react";

export default class RecentPosts extends Component {
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <div className="recent-posts-heading">Recent Posts</div>
          <ul className="recent-posts">
            <li>post 1</li>
            <li>post 2</li>
            <li>post 3</li>
          </ul>
        </div>
      </div>
    );
  }
}
