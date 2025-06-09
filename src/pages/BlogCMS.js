import React, { useState, useEffect } from 'react';
import '../styles/BlogCMS.css';

const BlogCMS = () => {
  const [posts, setPosts] = useState(() => {
    const stored = localStorage.getItem('blogPosts');
    return stored ? JSON.parse(stored) : [];
  });

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [fullContent, setFullContent] = useState('');

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const handleAdd = (e) => {
    e.preventDefault();
    const newPost = { title, summary, fullContent };
    setPosts([...posts, newPost]);
    setTitle('');
    setSummary('');
    setFullContent('');
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div className="blog-cms-page">
      <h1>Manage Blog Posts</h1>
      <form className="blog-form" onSubmit={handleAdd}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
        <textarea
          placeholder="Full Content"
          value={fullContent}
          onChange={(e) => setFullContent(e.target.value)}
          required
        />
        <button type="submit">Add Post</button>
      </form>

      <div className="blog-list">
        {posts.map((p, index) => (
          <div key={index} className="blog-item">
            <h2>{p.title}</h2>
            <p>{p.summary}</p>
            <button
              type="button"
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCMS;
