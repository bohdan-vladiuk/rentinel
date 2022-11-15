import PropTypes from 'prop-types';

// scroll bar
import 'simplebar/src/simplebar.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import 'styles/react-table.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';
import { AuthProvider } from 'contexts/JWTContext';

import { store } from 'store';
import ThemeCustomization from 'themes';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ReduxProvider store={store}>
      <ThemeCustomization>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </ThemeCustomization>
    </ReduxProvider>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};
