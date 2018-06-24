import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product',
  template: `
	<div>
		<div class="header">
			<h3>{{product.text}}</h3>
			<button (click)="delete()">🗑</button>
		</div>
		<img src="{{product.image}}" alt="{{product.text}}">
		<div>
			<span>{{product.price}} $</span>
		</div>
		<button (click)="add()">➕</button>
	</div>
	`,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	@Input() product: Product;
	@Input() index: number;
// /event emitter
	@Output() productMessenger :EventEmitter<number> = new EventEmitter(); 
	@Output() productAdd :EventEmitter<number> = new EventEmitter(); 

	public delete(): void {
		console.log(this.index);
		this.productMessenger.emit(this.index);
	} 
	public add(): void {
		console.log(this.product)
		this.productAdd.emit(this.index);
	}
  constructor() { }

  ngOnInit() {
  }

}
