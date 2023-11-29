'use client';;
import React, {useEffect} from "react";
import Banner from "@/app/components/landing/banner/banner";
import Partners from "@/app/components/landing/partners/partners";
import Winner from "@/app/components/landing/winners/winner";
import Faqs from "@/app/components/landing/faqs/faqs";
import {useActions} from "@/app/store/hooks";

import Snow from "@/app/components/ui/snow/snow";

export default function Home() {

  const {getStatus, getWinner, getSponsors} = useActions()
  useEffect(()=>{
      getStatus();
      // getWinner();
  },[])


    return (
    <>
        <Snow/>
        <Banner/>
        <Partners/>
        <Winner/>
        <Faqs/>
    </>
  )
}
