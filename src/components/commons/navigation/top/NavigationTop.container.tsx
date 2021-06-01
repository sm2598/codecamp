import NavigationTopUI from './NavigationTop.presenter'
import { useRouter } from "next/router";

export default function NavigationTop () {

  const router = useRouter();

  // OnClick Router-to-Board
  const onClickToHome = (event) => {
    router.push(`/boards/list`)
  }

  // CSS to show what page we are on
  const onPage = () => {
  }

  return ( 
    <NavigationTopUI 
      onClickToHome={onClickToHome}
    />
  )
}