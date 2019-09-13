import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import  { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {


  @Output() recipeWasSelected = new EventEmitter<Recipe>();
	recipes: Recipe[] = [
		new Recipe('Peppy Paneer Pizza', 'This is simply a test', 'https://www.dominos.co.in//files/items/Paneer_Special.jpg'),
		new Recipe('Paneer & Onion Pizza', 'This is simply a test', 'https://feenix.co.in/wp-content/uploads/2018/02/paneer_onion_veg1.jpg')
	];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
