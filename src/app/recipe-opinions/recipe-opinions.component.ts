import { Component, Input, OnInit } from '@angular/core';
import { Opinion } from '../model/Opinions';
import { Recipe } from '../recipe';
import { RecipeOpinionsService } from './recipe-opinions.service';

@Component({
  selector: 'app-recipe-opinions',
  templateUrl: './recipe-opinions.component.html',
  styleUrls: ['./recipe-opinions.component.css']
})
export class RecipeOpinionsComponent implements OnInit {

  opinions: Opinion[] = [];

  opinion: Opinion = {
    id: 0,
    username: '',
    rating: '',
    content: '',
    date: ''
  };

  @Input() recipe!: Recipe;
  constructor(private recipeOpinionsService: RecipeOpinionsService) { }

  // ngOnInit(): void {
  //   this.recipeOpinionsService.getOpinions().subscribe(
  //     opinions => this.opinions = opinions      
  //   );
  // }

  ngOnInit(): void {
    this.recipeOpinionsService.getOpinionsByRecipeId(this.recipe.id).subscribe(
      opinions => this.opinions = opinions
    );
    // Line below prints all opinion no matter the id of recipe is
    
    // this.recipeOpinionsService.getOpinions().subscribe(
    //   opinions => this.opinions = opinions
    // );
  }

  addOpinion() {
    this.recipeOpinionsService.addOpinion(this.recipe.id, this.opinion).subscribe(
    );
  }
}
