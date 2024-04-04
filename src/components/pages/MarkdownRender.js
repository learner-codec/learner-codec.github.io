import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';

function MarkdownRender(props) {
    console.log(props);
    const newProps = {
        ...props,
        renderers: {
          ...props.renderers,
          math: (props) => {
            console.log('math props:', props);
            return <MathJax.Node formula={props.value} />;
          },
          inlineMath: (props) => {
            console.log('inlineMath props:', props);
            return <MathJax.Node inline formula={props.value} />;
          },
          default: (props) => {
            console.log('default renderer:', props);
            return <span>{props.children}</span>;
          }
        }
      };
  
    console.log('newProps:', newProps);
    return (
      <MathJax.Provider input="tex">
        <ReactMarkdown {...newProps} />
      </MathJax.Provider>
    );
  }
export default MarkdownRender;