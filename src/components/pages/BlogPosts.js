import React, { Component } from 'react';
import AppMarkdown from './post1.md';
import ReactMarkdown from 'react-markdown';

class BlogPost extends Component {

  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AppMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return <ReactMarkdown children={markdown} />;
  }
}

export default BlogPost;