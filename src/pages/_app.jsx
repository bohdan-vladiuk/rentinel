import { Provider } from "react-redux";
import { AuthProvider } from "contexts/AuthContext";
import { store } from "store";

import "bootstrap/dist/css/bootstrap.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
