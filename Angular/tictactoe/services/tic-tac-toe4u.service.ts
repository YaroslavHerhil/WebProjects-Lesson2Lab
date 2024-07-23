import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicTacToe4uService {

    constructor() { }

    private gameMatrix:number[][] = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];



    public getCell(index:number):number{
        let x = Math.floor(index/3);
        let y = index % 3;

        if((x < 0 || x > 2) || (y < 0 || y > 2)){
            return -1;
        }

        return this.gameMatrix[x][y];
    }

    public setCell(index:number, value:number){
        let x = Math.floor(index/3);
        let y = index % 3;

        if((x < 0 || x > 2) || (y < 0 || y > 2) || (value < 0 || value > 2)){
            return;
        }

        this.gameMatrix[x][y] = value;
    }


    public checkWin(): { player : number, pos: number[]}{

        let tempArrH:number[] = [];
        let tempArrV:number[] = [];
        let diagArr1:number[] = [];
        let diagArr2:number[] = [];


        for(let i = 0;i < 3;i++){
            for(let j = 0; j < 3; j++){
                tempArrH.push(this.gameMatrix[i][j]);
                tempArrV.push(this.gameMatrix[j][i]);

                if(i == j)
                    diagArr1.push(this.gameMatrix[i][j])
                if((i + j) == 3 - 1)
                    diagArr2.push(this.gameMatrix[i][j])
            }
            if(tempArrH[0] != 0 &&tempArrH.every( v => v == tempArrH[0]))
                return {player: tempArrH[0], pos: [1 + 3*i, 2 + 3*i, 3 + 3 * i]};
            else
                tempArrH = [];
            
            if(tempArrV[0] != 0 &&tempArrV.every( v => v == tempArrV[0]))
                return {player: tempArrV[0], pos: [1 + i, 4 + i, 7 + i]};
            else
                tempArrV = [];
        }
        if(diagArr1[0] != 0 && diagArr1.every( v => v == diagArr1[0])){
            return {player: diagArr1[0], pos: [1,5,9]};
        }
        if(diagArr2[0] != 0 && diagArr2.every( v => v == diagArr2[0])){
            return {player: diagArr2[0], pos: [3,5,7]};
        }

        return {player: 0, pos:[]}
    }


    public isGridFull():boolean{
        return !(this.gameMatrix.some(row => row.includes(0)));
    }
    public clearGrid(){
        this.gameMatrix = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];
    }

}
