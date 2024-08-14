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

    public gameMode = 0;
    //1 = player v player
    //2 = player v sillyBot
    //3 = player v smartBot
    

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


    public startNewGame(mode:number = 1){
        this.gameService.clearGrid();
        this.turn = 1;
        this.player = 1
        this.lowerText = `Player ${this.player == 1 ? "X" : "O"}`;
        this.upperText = `Turn ${this.turn}`

        Array.prototype.forEach.call(document.getElementsByClassName("grid-cell"), function (element) {
            element.classList.remove("won1");
            element.classList.remove("won2");
        });

        this.gameMode = mode;

        document.getElementById(`playerUI`)!.innerHTML = `Player {{player == 1 ? "X" : "O"}}`
    }

    public placeTic(index:number){
        if(this.gameService.isGridFull() || this.gameService.checkWin().player != 0){
            this.startNewGame(this.gameMode);
            return;
        }

        if(this.gameService.getCell(index) != 0 ||(this.gameMode > 1 && this.player == 2))
            return;

        this.gameService.setCell(Math.floor(index / 3), index % 3, this.player);

        this.wrapUpTurn();
    }

    private wrapUpTurn(){
        this.turn++;
        this.upperText = `Turn ${this.turn}`;
        let winCombo = this.gameService.checkWin();
        if(winCombo.player != 0){
            winCombo.pos.forEach(index => {
                document.getElementById(`cell${index}`)?.classList.add(`won${this.player}`);
            });
            this.lowerText = `Player ${this.player == 1 ? "X" : "O"} won!!!`;
            
        }
        else if(this.gameService.isGridFull()){
            this.player = 0;
            this.lowerText = `Draw`;
        }
        else{
            if(this.player == 1) this.player = 2;
            else this.player = 1;

            this.lowerText = `Player ${this.player == 1 ? "X" : "O"}`;
            if(this.gameMode > 1 && this.player == 2){
                this.placeTicAi();
            }
        }
    }

    private async placeTicAi(){
        await this.delay(this.getRandomInt(500, 1500));
        if(this.gameMode == 2) this.gameService.placeTicAiSilly(2);
        else if(this.gameMode == 3) this.gameService.placeTicAiSmart(2);
        this.wrapUpTurn();
    }

  
    private async delay(ms: number) {
         return await new Promise( resolve => setTimeout(resolve, ms) );
    }
    private getRandomInt(max: number, min:number): number {
		return Math.floor(Math.random() * (max - min) + min);
	}

}
