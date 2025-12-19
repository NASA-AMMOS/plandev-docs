import React, { useEffect, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function RemoteCodeBlock(props) {
  const [code, setCode] = useState(null);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(props.url);
        const text = await response.text();
        setCode(text);
      } catch (e) {
        setCode('');
      }
    };
    fetchCode();
  }, [props.url]);

  // Before JS runs (Prince PDF), show the fallback with source URL
  // After JS runs and code loads, show the actual code
  if (code === null) {
    return (
      <div className="remote-code-block-fallback">
        <strong>{props.title || 'Source Code'}</strong>
        <br />
        View source at: <a href={props.url}>{props.url}</a>
      </div>
    );
  }

  return <CodeBlock {...props}>{code}</CodeBlock>;
}
