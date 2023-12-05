import React, { useEffect, useState } from 'react';

// This is a React component within your MDX file
const DynamicContent = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get('from');

    if (from === 'hackerNews') {
      setShowContent(true);
    }
  }, []);

  if (!showContent) return null;
  return (
    <div style={{ color: 'red', fontWeight: 'bold' }}>
      Hi hackers! You do NOT need to fill out a form. Use
      <br />
      <span style={{ color: 'yellow' }}>
        &nbsp; email: hacker@news.com <br />
        &nbsp; secretKey: hackers
      </span>{' '}
      <br />
      for login.
      {showContent}
    </div>
  );
};

export default DynamicContent;
