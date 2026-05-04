import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_180x180_apple_touch.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon_192x192_light.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon_512x512_light.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
