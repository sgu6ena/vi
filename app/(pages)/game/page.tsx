"use client"
import Question, {IQuestion} from "@/app/components/ui/question/question";
import {useState} from "react";
import {useRouter} from "next/navigation";

const q:IQuestion = {
    title: 'Вопрос 1',
  question:'Какое физическое качество развивается при длительном беге в медленном темпе? Какое физическое качество развивается при длительном беге в медленном темпе?',
  answers:[
    {text:'сила'},   {text:'сила'},   {text:'сила'},   {text:'сила'},
  ]
}
const j: IQuestion = {

    title: 'Вопрос 2',
    question: 'Какое физическое качество развивается при длительном беге в медленном темпе? Какое физическое качество развивается при длительном беге в медленном темпе?',
    answers: [
        {text: 'сила'}, {text: 'сила'}, {text: 'сила'}, {text: 'сила'},
    ]
}
const m: IQuestion = {
    title: 'Вопрос 3',
    question: 'Какое физическое качество развивается при длительном беге в медленном темпе? Какое физическое качество развивается при длительном беге в медленном темпе?',
    answers: [
        {text: 'сила'}, {text: 'сила'}, {text: 'сила'}, {text: 'сила'},
    ]
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
            <Question data={game[indexZ]} onNext={next}/>
        </>

    );
};

export default Page;