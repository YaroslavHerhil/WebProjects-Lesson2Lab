import { Component } from '@angular/core';
import { TicTacToe4uService } from '../../../services/tic-tac-toe4u.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tictactoe-game',
  standalone: true,
  imports: [CommonModule],
  providers: [TicTacToe4uService],
  templateUrl: './tictactoe-game.component.html',
  styleUrl: './tictactoe-game.component.scss'
})
export class TictactoeGameComponent {
    constructor(public gameService:TicTacToe4uService){}

    public turn:number = 1;
    public player:number = 1;

    public upperText:string = "Turn 1";
    public lowerText:string = "Player X"



    public getCellStyle(index:number):{"crossed": boolean, "nulled":boolean}
    {
        switch(this.gameService.getCell(index)){
            case 1:
                return {"crossed": true, "nulled": false}
            case 2:
                return {"crossed": false, "nulled": true}
            default:
                return {"crossed": false, "nulled": false}
        }
    }


    public placeTic(index:number){
        if(this.gameService.isGridFull() || this.gameService.checkWin().player != 0){
            this.gameService.clearGrid();
            this.turn = 1;
            this.player = 1
            this.lowerText = `Player ${this.player == 1 ? "X" : "O"}`;
            this.upperText = `Turn ${this.turn}`

            Array.prototype.forEach.call(document.getElementsByClassName("grid-cell"), function(element) {
                element.classList.remove("won1");
                element.classList.remove("won2");
            });


            document.getElementById(`playerUI`)!.innerHTML = `Player {{player == 1 ? "X" : "O"}}`

            return;
            
        }

        if(this.gameService.getCell(index) != 0)
            return;

        this.turn++;
        this.upperText = `Turn ${this.turn}`

        this.gameService.setCell(index, this.player)

        let winCombo = this.gameService.checkWin();
        if(winCombo.player != 0){
            winCombo.pos.forEach(index => {
                document.getElementById(`cell${index}`)?.classList.add(`won${this.player}`);
            });
            this.lowerText = `Player ${this.player == 1 ? "X" : "O"} won!!!`
            
        }
        else if(this.gameService.isGridFull()){
            this.player = 0;
            this.lowerText = `Draw`
        }
        else{
            this.lowerText = `Player ${this.player == 1 ? "X" : "O"}`;
            if(this.player == 1) this.player = 2;
            else this.player = 1;
        }
    }



  


}
