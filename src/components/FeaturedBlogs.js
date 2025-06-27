import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/FeaturedBlogs.css';

const FeaturedBlogs = () => {
  const defaultPosts = useMemo(
    () => [
      {
        id: 1,
        title: 'The Benefits of Personal Training',
        summary:
          'Personal training provides individuals with a tailored approach to fitness. It ensures proper technique, motivation, and accountability.',
      },
      {
        id: 2,
        title: 'Group Training: Why It Works',
        summary:
          'Group training sessions can provide a supportive and motivating environment. Learn how group workouts can bring results.',
      },
    ],
    []
  );

  const [posts, setPosts] = useState(defaultPosts);

  useEffect(() => {
    const stored = localStorage.getItem('blogPosts');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.length) {
        setPosts([...defaultPosts, ...parsed]);
      }
    }
  }, [defaultPosts]);

  return (
    <section className="featured-blogs">
      <h2>Latest From The Blog</h2>
      <div className="featured-list">
        {posts.slice(0, 3).map((post) => (
          <div key={post.id} className="featured-item">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <Link to="/blog" className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;
