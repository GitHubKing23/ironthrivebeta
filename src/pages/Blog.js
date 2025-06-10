// src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import '../styles/Blog.css'; // Import the CSS file for the Blog page

const getEmbedUrl = (url) => {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const Blog = () => {
  const defaultPosts = [
    {
      id: 1,
      title: 'The Benefits of Personal Training',
      summary:
        'Personal training provides individuals with a tailored approach to fitness. It ensures proper technique, motivation, and accountability.',
      fullContent: `
        Personal training has numerous benefits, especially when it comes to improving fitness and achieving specific goals.
        One of the key advantages is the personalized approach that a trainer offers. Unlike general workout plans or programs,
        a personal trainer customizes the routine to suit the individual’s needs, body type, and goals. This ensures proper form and technique,
        which can reduce the risk of injury and enhance the effectiveness of each exercise.

        In addition to providing personalized workouts, personal trainers also offer motivation and accountability. Many individuals struggle with staying consistent or pushing themselves beyond their comfort zones. A trainer can help by setting realistic goals and encouraging clients to stay on track, which ultimately leads to better results.

        Whether you're trying to lose weight, build muscle, or improve overall health, personal training is an excellent option for anyone looking to take their fitness journey to the next level.
      `,
    },
    {
      id: 2,
      title: 'Group Training: Why It Works',
      summary:
        'Group training sessions can provide a supportive and motivating environment. Learn how group workouts can bring results.',
      fullContent: `
        Group training is an incredibly popular method of exercise that combines the benefits of social interaction and fitness. Unlike one-on-one training, group training allows you to work out with others who share similar goals, creating a motivating and supportive environment.

        The camaraderie in group training can be a powerful motivator. Whether it’s a small group of friends or a class full of strangers, the shared experience of working out together can foster a sense of community and support. This group dynamic helps individuals push through their limits and encourages them to stay committed to their fitness goals.

        Moreover, group sessions are often led by experienced trainers who can ensure everyone is performing exercises correctly and safely. Whether you’re taking a high-intensity interval training (HIIT) class or a yoga session, group training allows you to challenge yourself while being part of a group that cheers you on.

        In addition to the motivation, group training can be a more cost-effective option compared to personal training. It’s also a great way to meet new people who share similar interests.
      `,
    },
    // Add more articles as needed
  ];

  const [posts, setPosts] = useState(defaultPosts);
  const [readMore, setReadMore] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('blogPosts');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.length) {
        setPosts([...defaultPosts, ...parsed]);
      }
    }
  }, []); // Default posts are static, so [] is safe

  const toggleReadMore = (id) => {
    setReadMore(readMore === id ? null : id);
  };

  return (
    <div className="blog-page">
      <h1>Our Blog</h1>
      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
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
