import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Wiiii', 'LOL', 'http://katyaburg.ru/sites/default/files/pictures/krasota_prirody/krasivye_cvety_rozy_kartinki_foto_05.jpg', []),
    new Recipe('REEEE', 'Teeee', 'http://www.spr.ru/forum_img/55/2012-11/2381321/2951242.jpg', [])

  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
