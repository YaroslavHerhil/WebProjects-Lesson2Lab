import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TttAiService {

	constructor() { }

	public getSmartMove(grid: number[][], myType: number): number[] {
		let winAndThreatPos: { threat: number[], win: number[] } = this.getWinAndThreatPosition(grid, myType);

		if (winAndThreatPos.win.length != 0) return winAndThreatPos.win;
		else if (winAndThreatPos.threat.length != 0) return winAndThreatPos.threat;
		return this.getDumbMove(grid);
	}

	public getDumbMove(grid: number[][]): number[] {
		let x;
		let y;
		do {
			x = this.getRandomInt(3);
			y = this.getRandomInt(3);
		} while (grid[x][y] != 0)

		console.log(`x = ${x};y = ${y}`)
		return [x, y];
	}



	private getRandomInt(max: number): number {
		return Math.floor(Math.random() * max);
	}

	private checkForPossibleWin(sequence: number[]): { "blankIndex": number, "winningType": number } {
		if (sequence.filter(type => type == 0).length == 1) {
			if (sequence.filter(type => type == 1).length == 2) {
				return { "blankIndex": sequence.findIndex((blank) => blank == 0), "winningType": 1 };
			}
			else if (sequence.filter(type => type == 2).length == 2) {
				return { "blankIndex": sequence.findIndex((blank) => blank == 0), "winningType": 2 };
			}
		}

		return { "blankIndex": -1, "winningType": 0 };
	}

	private getWinAndThreatPosition(grid: number[][], myType: number): { win: number[], threat: number[] } {
		let oppositeType = myType == 2 ? 1 : 2;

		let tempArrH: number[] = [];
		let tempArrV: number[] = [];
		let diagArr1: number[] = [];
		let diagArr2: number[] = [];

		let tempPossibleWin = { "blankIndex": 0, "winningType": 0 };
		let threat: number[] = [];
		let win: number[] = [];

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				tempArrH.push(grid[i][j]);
				tempArrV.push(grid[j][i]);

				if (i == j)
					diagArr1.push(grid[i][j])
				if ((i + j) == 3 - 1)
					diagArr2.push(grid[i][j])
			}
			tempPossibleWin = this.checkForPossibleWin(tempArrH);
			if (tempPossibleWin.winningType == oppositeType) threat = [i, tempPossibleWin.blankIndex];
			if (tempPossibleWin.winningType == myType) win = [i, tempPossibleWin.blankIndex];

			tempPossibleWin = this.checkForPossibleWin(tempArrV);
			if (tempPossibleWin.winningType == oppositeType) threat = [tempPossibleWin.blankIndex, i];
			if (tempPossibleWin.winningType == myType) win = [tempPossibleWin.blankIndex, i];

			tempArrH = [];
			tempArrV = [];
		}
		tempPossibleWin = this.checkForPossibleWin(diagArr1);
		if (tempPossibleWin.winningType == oppositeType)
			threat = [tempPossibleWin.blankIndex, tempPossibleWin.blankIndex];
		if (tempPossibleWin.winningType == myType)
			win = [tempPossibleWin.blankIndex, tempPossibleWin.blankIndex];

		tempPossibleWin = this.checkForPossibleWin(diagArr2);
		if (tempPossibleWin.winningType == oppositeType)
			threat = [tempPossibleWin.blankIndex, 2 - tempPossibleWin.blankIndex];
		if (tempPossibleWin.winningType == myType)
			win = [tempPossibleWin.blankIndex, 2 - tempPossibleWin.blankIndex];

		return { threat: threat, win: win };
	}
}


