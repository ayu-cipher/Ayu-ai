// File: pages/_app.js
// Ye app ka main wrapper hai jo global styles load karta hai
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
