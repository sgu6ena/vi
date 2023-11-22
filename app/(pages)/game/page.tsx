"use client"
import Question from "@/app/components/ui/question/question";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {IQuestion} from "@/app/store/game/game.interface";

const q:IQuestion = {
    "id": 1,
    "title": "У Санта Клауса она искусственная, а у Деда Мороза настоящая:",
    "body": "У Санта Клауса она искусственная, а у Деда Мороза настоящая:",
    "answer1": "Борода",
    "answer2": "Улыбка",
    "answer3": "Прописка",
    "answer4": "",
    "time": 82,
    "type": null
}
const j: IQuestion = {
    "id": 2,
    "title": "У Санта Клауса она искусственная, а у Деда Мороза настоящая:",
    "body": "У Санта Клауса она искусственная, а у Деда Мороза настоящая:",
    "answer1": "Борода",
    "answer2": "Улыбка",
    "answer3": "Прописка",
    "answer4": "",
    "time": 62,
    "type": null
}
const m: IQuestion = {
    "id": 3,
    "title": "У Санта Клауса она искусственная, а у Деда Мороза настоящая:",
    "body": "У Санта Клауса она искусственная, а у Деда Мороза настоящая:",
    "answer1": "Борода",
    "answer2": "Улыбка",
    "answer3": "Прописка",
    "answer4": "",
    "time": 48,
    "type": null
}

const game: IQuestion[] = [q, j, m]
const Page = () => {
    const [indexZ, setIndexZ] = useState(0)
    const {push} = useRouter()
    const next = () => {
        if (indexZ < 2)
            setIndexZ(indexZ + 1)
        else
            push('game/win')

    }
    return (
        <>
    <Question question={game[indexZ]} onNext={next}/>
       </>

    );
};

export default Page;