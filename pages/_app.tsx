import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';

type AppOwnProps = { example: string };

export default function MyApp({ Component, pageProps, example }: AppProps & AppOwnProps) {
  return (
    <>
      <Head>
        {/* X pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},
            s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('init','oi36s');
            twq('track','PageView');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
