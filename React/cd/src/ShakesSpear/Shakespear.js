import PlayInfo from "./PlayInfo";
import AuthorInfo from "./AuthorInfo";

export default function Shackespear(props){
    const works=( <ul>
        <li>
            Romeo and Juliet(but cooler)
        </li>
        <li>
            Henry VII: Second Ammendment
        </li>
        <li>
            Ceasar Ceasar's Bizzaro Journey
        </li>
    </ul>);
    

    return(
        <div>
            <PlayInfo title="Hamlet 2: Ham never ends" synopsis="Ham refused to end" picture="/ham.jpg"></PlayInfo>
            <AuthorInfo authorName="Shakey Speary" authorDesc="Shackey Spearey was forcebly erased from history by his twin brother, Shakespear, in an attempt to disctance himself from Shakey's extraordinary genius." picture="/shakey,jpg" works={works}></AuthorInfo>
        </div>
    )
}
