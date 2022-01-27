import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myrecipeapp';
  public recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void{
    this.getRecipes();      
  }

  public getRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      (response: Recipe[]) => {
        this.recipes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
