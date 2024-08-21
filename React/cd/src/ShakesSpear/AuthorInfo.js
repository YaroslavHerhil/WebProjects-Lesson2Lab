
export default function AuthorInfo(props){
    return(
        <div>
            <h1>{props.authorName}</h1>
            <p>
                {props.authorDesc}
            </p>
            <img src={props.picture}></img>
            <p>
                Works:
                {props.works}
            </p>
        </div>
    )
}
