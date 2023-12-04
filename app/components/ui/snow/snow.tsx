'use client';
import React from 'react';
import { useScreen } from "usehooks-ts";
import Snowfall from "react-snowfall";

function Snow() {
    const screen = useScreen();
    const width = screen?.width || 0;
    const isSnow = width > 600;

    return isSnow ? <Snowfall color={'#ffffff50'} snowflakeCount={500} radius={[0.5, 5.0]} wind={[-1, 3.0]}/> :
        <Snowfall color={'#ffffff70'} snowflakeCount={200} radius={[0.5, 4.0]} wind={[-1, 1.0]}/>;
}

export default Snow;