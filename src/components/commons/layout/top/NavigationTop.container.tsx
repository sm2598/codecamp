import NavigationTopUI from './NavigationTop.presenter'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

export default function NavigationTop () {

  const router = useRouter();

  // OnClick Router-to-Board
  const onClickToBoard = (event) => {
    router.push(`/boards/list`)

  }
  const [a, setA] = useState(0)
  // useEffect(function mount() {
  //   function onScroll() {
   
  //     setA(scrollY)
  //     if(a> 480){
  //       console.log(true)
  //     }
  //   }

  //   window.addEventListener("scroll", onScroll);

  //   return function unMount() {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // });

  
  return ( 
    <NavigationTopUI 
      onClickToBoard={onClickToBoard}
    />
  )
}