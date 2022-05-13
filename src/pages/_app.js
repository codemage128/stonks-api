import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store";
import "../../styles/globals.css";
function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default App;
