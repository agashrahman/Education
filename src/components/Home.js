// src/components/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 


const educationalResources = [
  { id: 1, title: 'Introduction to Mathematics', category: 'Mathematics' },
  { id: 2, title: 'History', category: 'History' },
  { id: 3, title: 'Programming Fundamentals', category: 'Computer Science' },
  { id: 4, title: 'Physics for Beginners', category: 'Physics' },
  { id: 5, title: 'Literature and Poetry', category: 'Literature' },
  { id: 6, title: 'Chemistry Essentials', category: 'Chemistry' },
  { id: 7, title: 'Art History', category: 'Art' },
  { id: 8, title: 'Introduction to Economics', category: 'Economics' },
  { id: 9, title: 'Environmental Science', category: 'Science' },
  { id: 10, title: 'Political Philosophy', category: 'Philosophy' },
  { id: 11, title: 'Digital Marketing Basics', category: 'Marketing' },
  { id: 12, title: 'French Language Learning', category: 'Language' },
  { id: 13, title: 'Introduction to Psychology', category: 'Psychology' },
  { id: 14, title: 'Music Theory and Composition', category: 'Music' },
  { id: 15, title: 'Astrophysics Explained', category: 'Physics' },
  { id: 16, title: 'Yoga and Meditation Practices', category: 'Health' },
  { id: 17, title: 'World Geography', category: 'Geography' },
  { id: 18, title: 'Introduction to Artificial Intelligence', category: 'Computer Science' },
  { id: 19, title: 'Entrepreneurship Fundamentals', category: 'Business' },
  { id: 20, title: 'Introduction to Sociology', category: 'Sociology' },

];


const Home = ({ isLoggedIn, setLoggedIn }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  

  const filteredResources = educationalResources.filter(resource => {
    const matchesSearchTerm = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? resource.category === selectedCategory : true;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="home-container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="content-container">
        <header>
          <h1 className="HeadTitle">Education for All</h1>
        </header>
        <section>
          <p>
            Welcome to our Education for All initiative! We believe that education is a
            fundamental right for everyone, and it has the power to transform lives and
            communities.
          </p>
          <p>
            Our mission is to provide accessible and quality education, breaking down barriers
            and ensuring that learning opportunities reach every corner of society.
          </p>
        </section>
        <section className="educational-resources">
          <h2 className='HeadTitle'>Educational Resources</h2>

         
          <input
            type="text"
            placeholder="Search for resources..."
            value={searchTerm}
            onChange={handleSearchTermChange}
            className="search-input"
          />

         
          <select value={selectedCategory} onChange={handleCategoryChange} className="category-select">
            <option value="">All Categories</option>
            <option value="Mathematics">Mathematics</option>
            <option value="History">History</option>
            <option value="Computer Science">Computer Science</option>
          
          </select>

          
          <ul className="resource-list">
  {filteredResources.map(resource => (
    <li key={resource.id} className="resource-item">
      <Link to={resource.category === 'Mathematics' ? '/math-introduction' : '/history-resource'}>
        <div>
          {resource.title}
        </div>
      </Link>
    </li>
  ))}
</ul>
        </section>
        <section>
          <h2 className='HeadTitle'>Get Involved</h2>
          <p>
            Join us in our mission to make education accessible to all. Whether you're a student,
            educator, or passionate advocate, there are various ways you can contribute.
          </p>
          <p>
            Together, let's build a world where everyone has the opportunity to learn and
            succeed.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;

