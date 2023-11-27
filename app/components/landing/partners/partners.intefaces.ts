import {ISponsor} from "@/app/api/types";


export interface IAutoplay {
    delay?: number,
    disableOnInteraction?: boolean,
    reverseDirection?: boolean,
    waitForTransition?: boolean
}

export interface ISponsorSlider {
    items: ISponsor[],
    autoplay: IAutoplay
}



