import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

	ingredients: Ingredient[] = [
		new Ingredient('Apple', 5),
		new Ingredient('Tomatoes', 10)
	];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    const found = this.ingredients.some(el => el.name == ingredient.name);
    if(!found) {
      this.ingredients.push(ingredient);
    } else {
      alert('item already exsist!');
    }
    // const foundIndex = this.ingredients.findIndex(el => el.name == ingredient.name);
    // if(foundIndex <=-1) {
    //   this.ingredients.push(ingredient);
    // } else {
    //    this.ingredients[foundIndex].amount =  Number(this.ingredients[foundIndex].amount) + Number(ingredient.amount);
    // }
  }

}
