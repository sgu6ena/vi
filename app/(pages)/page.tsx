'use client';
import dynamic from "next/dynamic";

;
import React, {useEffect} from "react";
import Banner from "@/app/components/landing/banner/banner";
import Partners from "@/app/components/landing/partners/partners";
import Winner from "@/app/components/landing/winners/winner";
import Faqs from "@/app/components/landing/faqs/faqs";
import {useActions} from "@/app/store/hooks";
import {useMain} from "@/app/hooks/useMain";


const DynamicSnow = dynamic(() => import('../components/ui/snow/snow').then(m => m.default), {
    ssr: false,
})
export default function Home() {


    return (
    <>
        <DynamicSnow/>
        <Banner/>
        <Partners/>
        <Winner/>
        <Faqs/>
    </>
  )
}
