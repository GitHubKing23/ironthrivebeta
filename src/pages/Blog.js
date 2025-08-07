// src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import '../styles/Blog.css'; // Import the CSS file for the Blog page
import { defaultBlogPosts } from '../data/defaultBlogPosts';

const getEmbedUrl = (url) => {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const Blog = () => {
  const [posts, setPosts] = useState(() => {
    const stored = localStorage.getItem('blogPosts');
    return stored ? JSON.parse(stored) : defaultBlogPosts;
  });
  const [readMore, setReadMore] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('blogPosts');
    if (!stored) {
      localStorage.setItem('blogPosts', JSON.stringify(defaultBlogPosts));
    }
  }, []);

  const toggleReadMore = (id) => {
    setReadMore(readMore === id ? null : id);
  };

  return (
    <div className="blog-page">
      <h1>Our Blog</h1>
      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            {post.image && <img src={post.image} alt={post.title} className="blog-image" />}
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            {post.video && (
              <iframe
                src={getEmbedUrl(post.video)}
                title={post.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <button className="read-more" onClick={() => toggleReadMore(post.id)}>
              {readMore === post.id ? 'Read Less' : 'Read More'}
            </button>
            {readMore === post.id && <p className="full-content">{post.fullContent}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
