import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Footer } from "../src/components/commons/footer/Footer.container";
import NavigationTop from '../src/components/commons/navigation/top/NavigationTop.container'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <NavigationTop />
        <Component {...pageProps} />
      <Footer/>
    </ApolloProvider>
  );
}

export default MyApp;
