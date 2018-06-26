import { Component } from '@angular/core';
import { Product } from '../models/Product';
// main component of app
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public title: string = 'Shop-Market';

	public purchasedList : Product[] = []
	public productList : Product[] = [
		{text: 'Wallet', price: 19.90 , image: '../../assets/img/Wallet.jpg'},
		{text: 'Phone Case', price: 9.90 , image: '../../assets/img/Phone Case.jpg'},
		{text: 'Pencil', price: 2.90 , image: '../../assets/img/Pencil.jpg'},
		{text: 'Bag', price: 39.90 , image: '../../assets/img/Bag.jpg'},
		{text: 'Scanner', price: 149.90 , image: '../../assets/img/Scanner.jpg'},
		{text: 'Energy Drink', price: 4.90 , image: '../../assets/img/Energy Drink.jpg'},
	];

	public clicked:boolean = false;

	public addProduct():void {
		this.productList.push({text:'New Product #' + (this.productList.length + 1), 
							price: 99.90, 
							image: '../../assets/img/.jpg'
						})
	}
	public onDelete(index: number): void {
		switch ((<any>event).target.offsetParent.nodeName) {
			case "APP-PRODUCT":
				this.productList.splice(index, 1);
				break;
			
			case "APP-PURCHASED":
				this.purchasedList.splice(index, 1);
				break;
		}
	}
	public showList(): void {
		this.clicked = !this.clicked;
		var buttonEl:HTMLButtonElement = document.querySelector('#purchased_list>button');
		buttonEl.textContent = (buttonEl.textContent === 'Show') ? 'Hide' : 'Show';
		// if (buttonEl.textContent === 'Show') {
		// 	buttonEl.textContent = 'Hide';
		// } else {
		// 	buttonEl.textContent = 'Show'
		// }
	}
	
	public add(index: number) :void {
		var obj: Product = this.productList[index] 
		this.purchasedList.push(obj);
	}
}
