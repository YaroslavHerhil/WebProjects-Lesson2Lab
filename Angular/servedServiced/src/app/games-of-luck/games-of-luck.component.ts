import { Component } from '@angular/core';
import { RandomService } from '../../services/random.service';
import { getLocaleExtraDayPeriodRules } from '@angular/common';

@Component({
  selector: 'app-games-of-luck',
  standalone: true,
  imports: [],
  providers: [RandomService],
  templateUrl: './games-of-luck.component.html',
  styleUrl: './games-of-luck.component.css'
})
export class GamesOfLuckComponent {
    constructor(private randomApi:RandomService){}

    public theNumber:number = 0;
    




    private mapData(min:number, max:number, amount:number = 1, replacement:boolean = true):any{
        return {
            "jsonrpc": "2.0",
            "method": "generateIntegers",
            "params": {
                "apiKey": "de00e178-8ea2-4345-9e0f-1d4832fdc560",
                "n": amount,
                "min": min,
                "max": max,
            },
            "replacement": replacement,
            "id": 1
        };
    }

    getNumbersRange(){
        let min = parseFloat((<HTMLInputElement>document. getElementById("lowerRange")). value);
        let max = parseFloat((<HTMLInputElement>document. getElementById("upperRange")). value);

        let data = this.mapData(min, max);
        this.randomApi.post(data).subscribe(
            (response:any) => {this.theNumber = response.result.random.data[0]},
            (error) => {console.log(error)}     
        );
    }

    coinFlip(playerChoice:number){
        let data = this.mapData(0,1);
        let result: number = 0;
        this.randomApi.post(data).subscribe(
            (response: any) => {
                result = response.result.random.data[0];
                console.log("in api call " + result);

                if (result == 0) {
                    (document.getElementById('headTail') as HTMLImageElement).innerText = "Heads";
                } else {
                    (document.getElementById('headTail') as HTMLImageElement).innerText = "Tails";
                    console.log("hmmhmm");
                }

                if (result == playerChoice) {
                    (document.getElementById('winLoss') as HTMLImageElement).innerText = "You won!";
                } else {
                    (document.getElementById('winLoss') as HTMLImageElement).innerText = "You lost!";
                }
                console.log("at the end " + result);
            },
            (error) => {
                console.log(error);
            }
        );
    }

}
