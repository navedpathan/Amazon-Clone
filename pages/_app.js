import '../styles/globals.css';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { store } from '../app/store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
    <Provider session={session} store={store}>
      <Component {...pageProps} />;
    </Provider>
    </SessionProvider>
  )
}

export default MyApp


