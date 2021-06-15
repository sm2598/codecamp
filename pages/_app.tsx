import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import Layout from "../src/components/commons/layout/index"
import GlobalStyles from "../src/commons/styles/globalStyles";
import { useState, createContext } from "react";
import { onError } from "@apollo/client/link/error";
import axios from "axios";

export const GlobalContext = createContext({
  accessToken: "",
  setAccessToken: (_: string) => {},
});

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const uploadLink = createUploadLink({
    uri: "http://backend.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  // @ts-ignore
  const errorLink = onError(async ({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 만료된 토큰을 재발급 받기
          const response = await axios.post(
            "http://backend.codebootcamp.co.kr/graphql",
            {
              query: `
                mutation restoreAccessToken {
                  restoreAccessToken {
                    accessToken
                  }
                }
              `,
            },
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );
          const newAccessToken =
            response.data.data.restoreAccessToken.accessToken;
          setAccessToken(newAccessToken);

          // 재발급 받은 토큰으로 실패했던 쿼리 다시 날리기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${newAccessToken}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
