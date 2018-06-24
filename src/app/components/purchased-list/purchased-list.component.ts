import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';


@Component({
  selector: 'app-purchased-list',
  template:  `
		
			<app-purchased class="col-lg-3  col-md-5 col-sm-7" 
				*ngFor="let purchased of purchasedList; index as i;"
				[purchased]="purchased"
				[index]="i"
				(purchasedMessenger)="onDelete($event)"
				
				>
			</app-purchased>
		
	`,
  styleUrls: ['./purchased-list.component.css']
})
export class PurchasedListComponent implements OnInit {
	@Input() purchasedList: Product[]

	@Output() purchasedListMessenger: EventEmitter<number> = new EventEmitter()

	public onDelete(index: number): void {
		this.purchasedListMessenger.emit(index);
	}


	constructor() { 

	}

	ngOnInit() {
	}

}
// (productMessenger)="onDelete($event)"