import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { Footer } from "../src/components/commons/footer/Footer.container";
import NavigationTop from "../src/components/commons/navigation/top/NavigationTop.container";
import GlobalStyles from "../src/commons/styles/globalStyles";

function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <NavigationTop />
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
