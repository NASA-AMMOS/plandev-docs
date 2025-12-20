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

  if (code === null) {
    return (
      <div className="remote-code-block-fallback">
        <div><strong>{props.title || 'Source Code'}</strong></div>
        <div className="remote-code-block-loading">Loading...</div>
        <div>View source: <a href={props.url}>{props.url}</a></div>
      </div>
    );
  }

  return <CodeBlock {...props}>{code}</CodeBlock>;
}
