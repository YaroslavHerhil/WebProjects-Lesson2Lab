import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styles: ``
})
export class ResumeComponent {
    FullName:string = "Herhil Yaroslav";

    Skills:Array<string> = [
        "Coding",
        "Baking",
        "Cleaning coffee machines",
        "Backseating",
        "Eating leftovers"
    ]

    Today: number = Date.now();


    Experiences:{ title: string, content: string, class:{educationComponent:boolean, experienceComponent:boolean}}[] = [
        {
            title: "Proffesional coffee machine cleaner at NASA 1997-Now",
            content: "Best coffee machine cleaner in the whole universe. Best coffee machine cleaner in the whole universe. Best coffee machine cleaner in the whole universe. Best coffee machine cleaner in the whole universe. Best coffee machine cleaner in the whole universe. ",
            class: {
                educationComponent: false,
                experienceComponent: true
            }
        },
        {
            title: "Proffesional coffee machine cleaner at White House Now-2034",
            content: "Best coffee machine cleaner in the United States. Best coffee machine cleaner in the United States. Best coffee machine cleaner in the United States. Best coffee machine cleaner in the United States. Best coffee machine cleaner in the United States. ",
            class: {
                educationComponent: false,
                experienceComponent: true
            }
        },
        {
            title: "Semi-professional baking aficionado at your house 2035-Forever",
            content: "You can't stop me now. It's inevitable.",
            class: {
                educationComponent: false,
                experienceComponent: true
            }
        },
    ]

    Educations:{ title: string, content: string, class:{educationComponent:boolean, experienceComponent:boolean} }[] = [
        {
            title: "Software Engineering PhD at Cambridge University",
            content: "Waste of time, really",
            class: {
                educationComponent: true,
                experienceComponent: false
            }
        },
        {
            title: "Baking diploma at Gourmet University of Warsaw",
            content: "Nah, I'd bake.",
            class: {
                educationComponent: true,
                experienceComponent: false
            }
        },
    ]


    //I have no idea where to use ngStyle so im just gonna put it 'ere
    CoolNameStyles = {
        "background" : "linear-gradient(red, blue)",
        "-webkit-background-clip": "text",
                "background-clip": "text",
        "-webkit-text-fill-color": "transparent"
    }
    
}
