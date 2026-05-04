import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeViewer({codeString}:any) {
    
  return (
    <SyntaxHighlighter language="typescript" style={vs2015}>
      {codeString}
    </SyntaxHighlighter>
  );
};


