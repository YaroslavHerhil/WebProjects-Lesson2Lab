import React from "react";

export default function CityInfo(props){
    return(
        <div class="city-container">
            <p>My beautiful city's name is {props.name}</p>
            
            <p>It's located in the southern part of a obscure and mysterious country - {props.country}</p>
            <p>It was founded in ther year of our Lord {props.year}</p>
            <p>I will now list a few photos from said city</p>

            <div class="photo-container">
                <img src="cit.jpg" alt="beautiful cit no water makr"></img>
                <img src="citie.jpg" alt="more beautiful cty with less warter makr"></img>
                <img src="city22.jpg" alt="even more butiful city with the least water makr"></img>
            </div>
        </div>
    );
}