'use client';

import Snowfall from "react-snowfall";
import React from "react";
import Banner from "@/app/components/landing/banner/banner";
import Partners from "@/app/components/landing/partners/partners";
import Winner from "@/app/components/landing/winners/winner";
import Faqs from "@/app/components/landing/faq/faqs";
export default function Home() {
    return (
        <>
          <Snowfall color={'#ffffff50'}   snowflakeCount={500} radius={[0.5, 5.0]} wind={[-1, 3.0]}/>
          <Banner/>

            <Partners/>
            <Winner/>
            <Faqs/>
        </>
    )
}
