import React, { useState, useEffect } from 'react';
import List from '../components/list';
import axios from 'axios';

const Appearance = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch data.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="appearance">
      <h1>Fetched Posts</h1>
      <List
        items={posts}
        renderItem={(post) => (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )}
      />
    </div>
  );
};

export default Appearance;
