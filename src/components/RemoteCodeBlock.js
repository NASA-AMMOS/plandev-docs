import React, { useEffect, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function RemoteCodeBlock(props) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const response = await fetch(props.url);
      const text = await response.text();
      setCode(text);
    } catch (e) {
      setCode('');
    }
    setLoading(false);
  });

  // Print fallback - shown in PDF when JavaScript doesn't execute
  const printFallback = (
    <div className="remote-code-block-print-fallback">
      <strong>{props.title || 'Source Code'}</strong>
      <br />
      View source at: <a href={props.url}>{props.url}</a>
    </div>
  );

  if (loading) {
    return (
      <>
        <div className="remote-code-block-loading">
          <CodeBlock {...props}>Loading...</CodeBlock>
        </div>
        {printFallback}
      </>
    );
  } else {
    return <CodeBlock {...props}>{code}</CodeBlock>;
  }
}
