import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
	selector: 'app-product-list',
// loop on products that takes from [products]="productList"
	template: `
		<app-product class="col-lg-3 col-md-5 col-sm-7" 
			*ngFor="let product of products; index as i;"
			[product]="product"
			[index]="i"
			(productMessenger)="onDelete($event)"
			(productAdd)="addProduct($event)"
		></app-product>
	`,
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
// takes from [products]="productList"
	@Input()
		products: Product[]

	@Output()
		productListMessenger: EventEmitter<number> = new EventEmitter()
	@Output() 
		productListAdd :EventEmitter<number> = new EventEmitter();

	public onDelete(index: number): void {
		this.productListMessenger.emit(index);
	}

	public addProduct(index: number): void {
			this.productListAdd.emit(index);
		}

    constructor() { }

    ngOnInit() {
    }

}