import PropTypes from 'prop-types';

// scroll bar
import 'simplebar/src/simplebar.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// apex-chart
import 'styles/apex-chart.css';
import 'styles/react-table.css';

// next
import { SessionProvider } from 'next-auth/react';

// third-party
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// project import
import Locales from 'components/Locales';
import ScrollTop from 'components/ScrollTop';
import RTLLayout from 'components/RTLLayout';
import Snackbar from 'components/@extended/Snackbar';
import { ConfigProvider } from 'contexts/ConfigContext';
import { store, persister } from 'store';
import ThemeCustomization from 'themes';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ReduxProvider store={store}>
      <ThemeCustomization>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          {getLayout(<Component {...pageProps} />)}
          {/* <Snackbar /> */}
        </SessionProvider>
      </ThemeCustomization>
      {/* <PersistGate loading={null} persistor={persister}>
          <ConfigProvider>
            <RTLLayout>
              <Locales>
                <ScrollTop>
                </ScrollTop>
              </Locales>
            </RTLLayout>
          </ConfigProvider>
      </PersistGate> */}
    </ReduxProvider>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};
