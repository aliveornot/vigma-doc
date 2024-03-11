import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
type AppOwnProps = { example: string };

export default function MyApp({ Component, pageProps, example }: AppProps & AppOwnProps) {
  return (
    <>
      <Head>
        {/* X pixel */}
        <Script
          type='text/javascript'
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
        {/* reddit pixel */}
        <Script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','a2_elzcxjtsr2up', {"aaid":"<AAID-HERE>","email":"<EMAIL-HERE>","externalId":"<EXTERNAL-ID-HERE>","idfa":"<IDFA-HERE>"});rdt('track', 'PageVisit');
            `,
          }}
        />
        {/* clarity */}
        <Script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: ` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "lexwqu5vr6");`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
