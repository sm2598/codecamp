import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import axios from "axios";

export default function withAuth(Component) {
  //컴포넌트

  return function test(props) {
    //props
    const router = useRouter();
    const { accessToken, setAccessToken } = useContext(GlobalContext);

    // 토큰체크
    useEffect(() => {
      if (accessToken) return;

      const restoreAccessToken = async () => {
        const response = await axios.post(
          "https://backend.codebootcamp.co.kr/graphql",
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
        if (!newAccessToken) router.push("/login");
      };
      restoreAccessToken();
    }, []);

    if (!accessToken)
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "80px",
          }}
        >
          Please log in to continue.
        </div>
      );

    return <Component {...props} />; // 컴포넌트 리턴
  };
}
