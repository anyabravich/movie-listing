import Header from "../components/Header";
import usePageLoading from "../hooks/usePageLoading";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";
import { BallTriangle } from "react-loader-spinner";
import { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const { loading } = usePageLoading();

  const [isLoad, setIsLoad] = useState(false);
  const [isVisibility, setIsVisibility] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
      setIsVisibility(true);
    }, 1000);
  }, []);

  return (
    <Theme>
      <GlobalStyles />
      {isLoad ? null : (
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
      )}
      <Wrap isVisibility={isVisibility}>
        <Header />
        {loading ? (
          <></>
        ) : (
          <>
            <Head>
              <meta name="description" content="Generated by create next app" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <title>Movies</title>
            </Head>
            <Component {...pageProps} />
          </>
        )}
      </Wrap>
    </Theme>
  );
}

const Wrap = styled.div`
  display: ${(props) => (props.isVisibility ? "block" : "none")};
`;
