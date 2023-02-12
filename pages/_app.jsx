import Container from "../components/Container";
import Header from "../components/Header";
import usePageLoading from "../hooks/usePageLoading";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";
import { BallTriangle } from "react-loader-spinner";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const { loading } = usePageLoading();

  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 1000);
  }, []);

  return (
    <Theme>
      <GlobalStyles />

      {isLoad ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#7B6EF6"
          ariaLabel="ball-triangle-loading"
          wrapperClass={"loader"}
          wrapperStyle={{
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          visible={true}
        />
      ) : (
        <>
          <Header />
          {loading ? (
            <Container>
              <h1>Loading...</h1>
            </Container>
          ) : (
            <Component {...pageProps} />
          )}
        </>
      )}
    </Theme>
  );
}
