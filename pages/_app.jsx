import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  );
}
