
export default function PlayInfo(props){
    return(
        <div>
            <h2>
                {props.title}
            </h2>
            <p>
                {props.synopsis}
            </p>
            <img src={props.picture}></img>
        </div>
    )
}
