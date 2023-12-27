import React, { useState, useEffect, PropsWithChildren } from 'react';

declare global {
  interface Window {
    twq?: (...props: any) => void;
  }
}

export function InstallLink({ target, children }: PropsWithChildren<{ target: 'marketplace' | 'vscode' }>) {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    // 사용자의 테마 설정을 감지하고 상태를 업데이트합니다.
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    setIsLightTheme(mediaQuery.matches);

    // 미디어 쿼리의 변화를 감지하여 상태를 업데이트합니다.
    const handler = (e) => setIsLightTheme(e.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  function onClick(e) {
    if (window.twq) window.twq('event', 'tw-oi36s-oibrl');
    window.open('vscode:extension/n3rds-inc.rnflow', '_blank');
  }

  return (
    <a
      href={'https://marketplace.visualstudio.com/items?itemName=n3rds-inc.rnflow'}
      onClick={onClick}
      target={'_blank'}
      rel='noopener noreferrer'
      style={{ textDecoration: 'underline', color: isLightTheme ? '#008ae6' : '#006be6' }}
    >
      {children}
    </a>
  );
}
