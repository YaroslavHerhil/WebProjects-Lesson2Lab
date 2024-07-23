import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';

@Component({
  selector: 'app-emoji',
  standalone: true,
  imports: [CommonModule],
  providers: [EmojiComponent],
  templateUrl: './emoji.component.html',
  styleUrl: './emoji.component.css'
})
export class EmojiComponent {

    constructor(private emojiApi:ApiService){
        this.getRandomEmojis();
    }
    
    private isRolling:boolean = true;
    private rollIndex:number = 0;
    private rollInterval = setInterval(this.roll, 100);
    private roll():void{
        this.slot1 = this.emojiPool[this.rollIndex].htmlCode;
        this.slot1 = this.emojiPool[this.rollIndex].htmlCode;
        this.slot1 = this.emojiPool[this.rollIndex].htmlCode;
        this.rollIndex++
        if(this.rollIndex == 7) this.rollIndex = 0;
    }
    private startRoll(){
        this.rollInterval = setInterval(this.roll, 100);
        this.isRolling = true;
    }
    private stopRoll(){
        clearInterval(this.rollInterval);
        this.isRolling = false;
    }



    public emojiPool:any[] = [ ];

    public slot1 = "";
    public slot2 = "";
    public slot3 = "";

    public score:number = 0;

    public confettiStyle = {
        "display": "none"
    }

    public getRandomEmojis(){
        this.emojiPool = [];
        for(let i = 0;  i < 7; i++){
            this.emojiApi.get("random/").subscribe(
                (data) => {this.emojiPool.push(data); console.log(data)},
                (error) => {console.log(error)}     
            );
        }
    }

    public stopSlot(){
        if(this.isRolling){
            this.stopRoll();
            this.confettiStyle.display = "none";

            //this.slot1 = this.emojiPool[Math.floor(Math.random() * 7)].htmlCode[0];
            //this.slot2 = this.emojiPool[Math.floor(Math.random() * 7)].htmlCode[0];
            this.slot1 = this.emojiPool[6].htmlCode[0];
            this.slot2 = this.emojiPool[6].htmlCode[0];
            this.slot3 = this.emojiPool[Math.floor(Math.random() * 7)].htmlCode[0];
            
            if(this.slot1 == this.slot2 && this.slot2 == this.slot3){
                this.win();
            }
        }
        else{
            this.startRoll();
        }
        

    }


    public win(){
        this.score += 100;
        this.confettiStyle.display = "block"
    }

}
