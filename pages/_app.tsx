import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Footer } from "../src/components/commons/footer/Footer.container";
import NavigationTop from "../src/components/commons/navigation/top/NavigationTop.container";
import GlobalStyles from "../src/commons/styles/globalStyles";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <NavigationTop />
        <GlobalStyles />
        <Component {...pageProps} />
      <Footer/>
    </ApolloProvider>
  );
}

export default MyApp;
