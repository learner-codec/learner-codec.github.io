import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Profile from '../../containers/profile/Profile';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { StyleProvider } from '../../contexts/StyleContext';
import SearchBar from './searchBar';
import blogData from './BLOGS/info.json';
import './blogs.scss';

export default function Blogs() {
  const darkPref = window.matchMedia('(prefers-color-scheme: dark)');
  const [isDark, setIsDark] = useLocalStorage('isDark', darkPref.matches);
  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark-mode' : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />
        <div className="content-wrapper">
          <div className="blogs-container">
            <SearchBar />
            <div className={isDark ? 'blog-title_dark' : 'blog-title'}>Welcome to my blog</div>
            {blogData.map((post, index) => (
              <Link key={index} to={`/pages/${post.filename.replace('.md', '')}`}>
                <div className={`blog-post-container ${isDark ? 'dark-mode' : ''}`}>
                  <div className="blog-post">
                    <h2>{post.title}</h2>
                    <p>
                      Published on {post.month}/{post.day}/{post.year} at {post.hour}:
                      {post.minute}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Profile />
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}