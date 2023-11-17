

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



export interface ISponsor{
    link:string
    title:string
    img:string
}