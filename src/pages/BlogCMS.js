import React, { useState, useEffect } from 'react';

const ADMIN_PASSWORD = '7vY3p$92q';

const BlogCMS = () => {
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem('adminLoggedIn') === 'true';
  });
  const [password, setPassword] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      fetchBlogPosts();
    }
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
          <ul>
            {blogPosts.map((post) => (
              <li key={post._id}>
                <strong>{post.title}</strong> - {post.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogCMS;
