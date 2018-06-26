import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product',
  template: `
	<div>
		<div class="header">
			<h3>{{product.text}}</h3>
			<button (click)="delete($event)">🗑</button>
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

	public delete(event): void {
		console.log(this.index,event);
		this.productMessenger.emit(this.index);
	} 
	public add(): void {
		this.productAdd.emit(this.index);
	}
  constructor() { }

  ngOnInit() {
  }

}
