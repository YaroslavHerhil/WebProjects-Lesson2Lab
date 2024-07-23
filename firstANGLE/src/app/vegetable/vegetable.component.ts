import { Component } from '@angular/core';

@Component({
	selector: 'app-vegetable',
	standalone: true,
	imports: [],
	templateUrl: './vegetable.component.html',
	styleUrl: './vegetable.component.css'
})
export class VegetableComponent {
	Images: Array<string> = ["assets/img1.jpg", "assets/img2.jpg", "assets/img3.jpg"];

	CurrentImg:number = 0;

	ngOnInit() 
	{

	}
	handleGetImage():void
	{
		this.Images.push((<HTMLInputElement> document.getElementById("imgUrl")).value)
	}
	
	handleClickLeft():void
	{
		this.CurrentImg++;
		if(this.CurrentImg > this.Images.length) this.CurrentImg = 0;
	}
	handleClickRight():void
	{
		this.CurrentImg--;
		if(this.CurrentImg < 0) this.CurrentImg = this.Images.length - 1;
	}
	getCurrentImage():string
	{
		return this.Images[this.CurrentImg];
	}
}
