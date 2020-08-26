import React from 'react';
import qs from 'querystring';
import postList from './posts';


export default function PostDetail() {
  let query = qs.parse(location.search.substr(1));
  console.log(query.id)
  let post = postList[`post${query.id || 1}`];
  return <div className="post-detail-wrapper">
    <h1>
      {post.title}
    </h1>
    <p>{post.id}</p>
    <p>{post.desc}</p>
    <p>{post.content}</p>

  </div>
}
