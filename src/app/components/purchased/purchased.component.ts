import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../models/Product';


@Component({
  selector: 'app-purchased',
  template: `
	<div>
		<div class="header">
			<h3>{{purchased.text}}</h3>
			<button (click)="delete()">🗑</button>
		</div>
		<img src="{{purchased.image}}" alt="{{purchased.text}}">
		<div>
			<span>{{purchased.price}} $</span>
		</div>
	</div>
	`,
  styleUrls: ['./purchased.component.css']
})
export class PurchasedComponent implements OnInit {
	@Input() purchased: Product;
	@Input() index: number;

	@Output() purchasedMessenger :EventEmitter<number> = new EventEmitter();

public delete():void {
	console.log(this.index);
	this.purchasedMessenger.emit(this.index);
} 
  constructor() { }

  ngOnInit() {
  }

}
