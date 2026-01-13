import React, { useEffect, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

// Detect if running in Prince PDF generator
const isPrince = typeof navigator !== 'undefined' && navigator.userAgent.includes('Prince');

export default function RemoteCodeBlock(props) {
  const [code, setCode] = useState(null);

  useEffect(() => {
    // Skip fetching in Prince - it won't wait for async requests anyway
    if (isPrince) return;

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

  // Show fallback for Prince or while loading
  if (isPrince || code === null) {
    return (
      <div className="remote-code-block-fallback">
        <div><strong>{props.title || 'Source Code'}</strong></div>
        {!isPrince && <div className="remote-code-block-loading">Loading...</div>}
        <div>View source: <a href={props.url}>{props.url}</a></div>
      </div>
    );
  }

  return <CodeBlock {...props}>{code}</CodeBlock>;
}
