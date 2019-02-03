import { Racipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Racipe[]=[
    new Racipe('a test recipe' , 'this is the first recipe' , 'https://get.pxhere.com/photo/biryani-dish-food-cuisine-recipe-rice-asian-food-vegetarian-food-1459569.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
