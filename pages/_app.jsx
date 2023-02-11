import Container from "../components/Container";
import Header from "../components/Header";
import usePageLoading from "../hooks/usePageLoading";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";

export default function App({ Component, pageProps }) {
  const { loading } = usePageLoading();
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      {loading ? (
        <Container>
          <h1>Loading...</h1>
        </Container>
      ) : (
        <Component {...pageProps} />
      )}
    </Theme>
  );
}
