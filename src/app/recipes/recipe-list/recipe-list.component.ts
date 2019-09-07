import { Component, OnInit } from '@angular/core';
import  { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Peppy Paneer Pizza', 'This is simply a test', 'https://www.dominos.co.in//files/items/Paneer_Special.jpg')
	];

  constructor() { }

  ngOnInit() {
  }

}
