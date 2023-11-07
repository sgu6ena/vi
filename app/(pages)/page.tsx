'use client';

import Partners from "@/app/components/landing/partners";
import Faqs from "@/app/components/landing/faqs";
import Winner from "@/app/components/landing/winner";
import Banner from "@/app/components/landing/banner";
import Snowfall from "react-snowfall";
import React from "react";
export default function Home() {
    return (
        <>
          <Snowfall color={'#ffffff50'}   snowflakeCount={500} radius={[0.5, 5.0]} wind={[-1, 3.0]}/>
          <Banner/>
            {/*<TimerBlock/>*/}
            <Partners/>
            <Winner/>
            <Faqs/>
        </>
    )
}
