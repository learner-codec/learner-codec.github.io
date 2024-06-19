import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { StyleProvider } from '../../contexts/StyleContext';
import blogData from './BLOGS/info.json';
import 'katex/dist/katex.min.css';
import Markdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import Profile from '../../containers/profile/Profile';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css';
import './PostView.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkToc from 'remark-toc';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };
  }

  componentDidMount() {
    this.fetchMarkdownContent();
  }

  fetchMarkdownContent = () => {
    const { filename } = this.props;
    const post = blogData.find((p) => p.filename === `${filename}.md`);
    // console.log("=======>",fetch(`${process.env.PUBLIC_URL}/BLOGS/${post.folder}/${post.filename}`));
    if (post) {
      fetch(`pages/blogposts/${post.folder}/${post.filename}`)
        .then((res) => res.text())
        .then((text) => this.setState({ markdown: text }));
    }
  };

  render() {
    const { markdown } = this.state;
    const { filename } = this.props;
    const post = blogData.find((p) => p.filename === `${filename}.md`);
  
    if (!post) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className={this.props.isDark ? 'dark-mode' : null}>
        <StyleProvider value={{ isDark: this.props.isDark, changeTheme: this.props.changeTheme }}>
          <Header />
          <div>
            <div className="blog-post-content">
              <h1>{post.title}</h1>
              <p>
                Published on {post.month}/{post.day}/{post.year} at {post.hour}:{post.minute}
              </p>
              {markdown && (
                <Markdown
                remarkPlugins={[remarkMath, [remarkToc, { maxDepth: 1 }]]}
                  rehypePlugins={[rehypeKatex]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={atomDark}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {markdown}
                </Markdown>
              )}
            </div>
          </div>
          <Profile />
          <Footer />
        </StyleProvider>
      </div>
    );
  }
}

const BlogPostWithContext = () => {
  const { filename } = useParams();
  const darkPref = window.matchMedia('(prefers-color-scheme: dark)');
  const [isDark, setIsDark] = useLocalStorage('isDark', darkPref.matches);
  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return <BlogPost filename={filename} isDark={isDark} changeTheme={changeTheme} />;
};

export default BlogPostWithContext;