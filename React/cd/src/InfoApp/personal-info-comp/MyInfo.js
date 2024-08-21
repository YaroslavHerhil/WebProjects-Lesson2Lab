import React from "react";

export default function MyInfo(props){
    return(
        <div class="my-container">
            <p>My name is {props.name}</p>
            <p>I located in the southern part of a obscure and mysterious country - {props.country}</p>
            <p>I was established in ther year of our Lord {props.year}</p>
            <p>I will now list a few photos of me</p>

            <div class="photo-container">
                <img src="per1.jpg" alt="beautiful me no water makr"></img>
                <img src="son2.jpg" alt="more beautiful me with less warter makr"></img>
                <img src="stock3.jpg" alt="even more butiful me with the least water makr"></img>
            </div>
        </div>
    );
}
