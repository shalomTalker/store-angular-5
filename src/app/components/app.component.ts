import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { Event } from '@angular/router';
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
	public addProduct():void {
		this.productList.push({text:'New Product #' + (this.productList.length + 1), 
							price: 99.90, 
							image: '../../assets/img/.jpg'
						})
	}
	public onDelete(index: number): void {
		var delTarget:Event=event;
		console.log(event:Event)
		// // switch (event.path[3].tagName) {
		// 	case "APP-PRODUCT":
		// 		this.productList.splice(index, 1);
		// 		break;
			
		// 	case "APP-PURCHASED":
		// 		this.purchasedList.splice(index, 1);
		// 		break;
		// }
	}
	public showList():any {
		var el :HTMLElement = document.querySelector('app-purchased-list')
			el.className += ' show'; 
			document.querySelector('.hideBtn').className = '';
			document.querySelector('.showBtn').className = 'hideBtn';
	}
	public hideList() :any {
		var el :HTMLElement = document.querySelector('app-purchased-list')
			el.className = ''; 
			document.querySelector('.hideBtn').className = 'showBtn';
			document.querySelector('.showBtn').nextElementSibling.className = 'hideBtn';

	}
	public add(index: number) :void {
		var obj: Product = this.productList[index] 
		this.purchasedList.push(obj);
	}
}
