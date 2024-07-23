import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-stuff',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-stuff.component.html',
  styleUrl: './new-stuff.component.scss'
})
export class NewStuffComponent {

   

    Today: Date = new Date();

    UpperText: string = "Hello, I'm upper!"
    DownerText: string = "Hi, I'm downer.."

    Price:number = 12;

    isVisibility:boolean = true; //!
    
    IsDisable = true; //!
    IsActive:boolean = false; //!

    public getRandomNumber():number{
        return Math.floor(Math.random() * 5 + 1);
    }


    ClassObject ={
        'active': this.IsActive,
        'disable': this.IsDisable,
        'text': "HELL",
    };



    coloe:string = "blue"
    fontSize:number = 46;
}
