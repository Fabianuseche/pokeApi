import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../utils/gtag'; // Opcional: Google Analytics
import PropTypes from 'prop-types';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Registra la página en Google Analytics (opcional)
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
