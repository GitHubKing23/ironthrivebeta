// src/pages/BlogCMS.js
import React, { useState, useEffect } from 'react';
import '../styles/BlogCMS.css';

const ADMIN_PASSWORD = '7vY3p$92q';

const getEmbedUrl = (url) => {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const BlogCMS = () => {
  const [loggedIn, setLoggedIn] = useState(
    () => localStorage.getItem('adminLoggedIn') === 'true'
  );
  const [password, setPassword] = useState('');

  const [posts, setPosts] = useState(() => {
    const stored = localStorage.getItem('blogPosts');
    return stored ? JSON.parse(stored) : [];
  });

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [fullContent, setFullContent] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [video, setVideo] = useState('');
  const [image, setImage] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      localStorage.setItem('adminLoggedIn', 'true');
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      setImage('');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const clearForm = () => {
    setTitle('');
    setSummary('');
    setFullContent('');
    setPublishDate('');
    setVideo('');
    setImage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: editingIndex !== null ? posts[editingIndex].id : Date.now(),
      title,
      summary,
      fullContent,
      publishDate,
      video,
      image,
    };

    if (editingIndex !== null) {
      const updated = [...posts];
      updated[editingIndex] = newPost;
      setPosts(updated);
      setEditingIndex(null);
    } else {
      setPosts([...posts, newPost]);
    }

    clearForm();
  };

  const handleEdit = (index) => {
    const p = posts[index];
    setTitle(p.title);
    setSummary(p.summary);
    setFullContent(p.fullContent);
    setPublishDate(p.publishDate);
    setVideo(p.video || '');
    setImage(p.image || '');
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
    if (editingIndex === index) {
      clearForm();
      setEditingIndex(null);
    }
  };

  if (!loggedIn) {
    return (
      <div className="blog-cms-page">
        <h1>Admin Login</h1>
        <form className="blog-form" onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="blog-cms-page">
      <h1>Manage Blog Posts</h1>
      <form className="blog-form" onSubmit={handleSubmit}>
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
        <input
          type="date"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
          required
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <input
          placeholder="YouTube URL"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />
        <button type="submit">
          {editingIndex !== null ? 'Save Post' : 'Add Post'}
        </button>
        {editingIndex !== null && (
          <button
            type="button"
            className="cancel-button"
            onClick={() => {
              setEditingIndex(null);
              clearForm();
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <div className="blog-list">
        {posts.map((p, index) => (
          <div key={index} className="blog-item">
            {p.image && (
              <img src={p.image} alt={p.title} className="blog-image" />
            )}
            <h2>{p.title}</h2>
            <p>{p.summary}</p>
            {p.video && (
              <iframe
                src={getEmbedUrl(p.video)}
                title={p.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <button
              type="button"
              className="edit-button"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
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
