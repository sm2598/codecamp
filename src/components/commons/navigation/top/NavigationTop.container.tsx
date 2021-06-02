import NavigationTopUI from './NavigationTop.presenter'
import { useRouter } from "next/router";

export default function NavigationTop () {

  const router = useRouter();

  // OnClick Router-to-Board
  const onClickToBoard = (event) => {
    router.push(`/boards/list`)
  }

  return ( 
    <NavigationTopUI 
      onClickToBoard={onClickToBoard}
    />
  )
}