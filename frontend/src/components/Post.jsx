function Post({ post }) {
  const date = new Date(post.createdAt)
  return (
    <div key={post._id}>
      <h3>Title: {post.title}</h3>
      <h4>Author: {post.author.username}</h4>
      <div>{date.toLocaleDateString()} {date.toLocaleTimeString()}</div>
      <p>{post.body}</p>
    </div>
  );
}

export default Post
