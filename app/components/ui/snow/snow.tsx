import React from 'react';
import {useScreen} from "usehooks-ts";
import Snowfall from "react-snowfall";

const Snow = () => {
    const screen = useScreen()
    const width = screen?.width || 0
    const isSnow = width > 600

    return isSnow ? <Snowfall color={'#ffffff50'} snowflakeCount={500} radius={[0.5, 5.0]} wind={[-1, 3.0]}/> : null

};

export default Snow;