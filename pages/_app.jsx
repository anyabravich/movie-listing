import Header from "../components/Header";
import Main from "../components/Main";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </Theme>
  );
}
