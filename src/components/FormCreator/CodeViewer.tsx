import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import vs2015 from "react-syntax-highlighter/dist/esm/styles/hljs/vs2015";

SyntaxHighlighter.registerLanguage("typescript", typescript);

type CodeViewerProps = {
  codeString: string;
};

export default function CodeViewer({ codeString }: CodeViewerProps) {
  return (
    <SyntaxHighlighter language="typescript" style={vs2015}>
      {codeString}
    </SyntaxHighlighter>
  );
}
