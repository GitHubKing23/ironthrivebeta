import React, { useState, useEffect } from 'react';

const ADMIN_PASSWORD = '7vY3p$92q';

const BlogCMS = () => {
  const [loggedIn, setLoggedIn] = useState(() => localStorage.getItem('adminLoggedIn') === 'true');
  const [password, setPassword] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedPost, setEditedPost] = useState({ title: '', content: '' });

  useEffect(() => {
    if (loggedIn) fetchBlogPosts();
  }, [loggedIn]);

  const fetchBlogPosts = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs`);
      const data = await res.json();
      setBlogPosts(data);
    } catch (error) {
      console.error('Failed to fetch blog posts:', error);
    }
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      localStorage.setItem('adminLoggedIn', 'true');
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('adminLoggedIn');
  };

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleAddPost = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      });
      if (res.ok) {
        setNewPost({ title: '', content: '' });
        fetchBlogPosts();
      }
    } catch (error) {
      console.error('Failed to add post:', error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/blogs/${id}`, {
        method: 'DELETE',
      });
      fetchBlogPosts();
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  const handleEditClick = (post) => {
    setEditingPostId(post._id);
    setEditedPost({ title: post.title, content: post.content });
  };

  const handleSaveEdit = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/blogs/${editingPostId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedPost),
      });
      setEditingPostId(null);
      setEditedPost({ title: '', content: '' });
      fetchBlogPosts();
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  };

  return (
    <div className="container">
      {!loggedIn ? (
        <div className="login-form">
          <h2>Admin Login</h2>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="cms">
          <h2>Manage Blog Posts</h2>
          <button onClick={handleLogout}>Logout</button>

          <h3>Add New Post</h3>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newPost.title}
            onChange={handleInputChange}
          />
          <textarea
            name="content"
            placeholder="Content"
            value={newPost.content}
            onChange={handleInputChange}
          ></textarea>
          <button onClick={handleAddPost}>Add Post</button>

          <h3>Existing Posts</h3>
          <ul>
            {blogPosts.map((post) => (
              <li key={post._id}>
                {editingPostId === post._id ? (
                  <div>
                    <input
                      value={editedPost.title}
                      onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
                    />
                    <textarea
                      value={editedPost.content}
                      onChange={(e) => setEditedPost({ ...editedPost, content: e.target.value })}
                    />
                    <button onClick={handleSaveEdit}>Save</button>
                  </div>
                ) : (
                  <>
                    <strong>{post.title}</strong>
                    <p>{post.content}</p>
                    <button onClick={() => handleEditClick(post)}>Edit</button>
                    <button onClick={() => handleDeletePost(post._id)}>Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogCMS;
