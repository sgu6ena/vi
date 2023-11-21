"use client"
import Question, {IQuestion} from "@/app/components/ui/question/question";

const q:IQuestion = {
  question:'Какое физическое качество развивается при длительном беге в медленном темпе? Какое физическое качество развивается при длительном беге в медленном темпе?',
  answers:[
    {text:'сила'},   {text:'сила'},   {text:'сила'},   {text:'сила'},
  ]
}
const Page = () => {
  return (<Question data={q}/>  );
};

export default Page;