import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Vigma RN</span>,
  project: {
    link: 'https://github.com/aliveornot/vigma-doc',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  // docsRepositoryBase: 'https://github.com/aliveornot/vigma-doc',
  footer: {
    text: 'Powered by Nextra',
  },
  editLink: {
    text: 'Edit this page on GitHub',
    component: ({ className, filePath }) => (
      <a className={className} href={`https://github.com/aliveornot/vigma-doc/${filePath}`}>
        edit this page on github
      </a>
    ),
  },
};

export default config;
