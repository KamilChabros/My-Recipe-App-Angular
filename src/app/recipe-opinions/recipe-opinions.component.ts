import { Component, OnInit } from '@angular/core';
import { Opinion } from '../model/Opinions';
import { RecipeOpinionsService } from './recipe-opinions.service';

@Component({
  selector: 'app-recipe-opinions',
  templateUrl: './recipe-opinions.component.html',
  styleUrls: ['./recipe-opinions.component.css']
})
export class RecipeOpinionsComponent implements OnInit {

opinions: Opinion[]= [];
  constructor(private recipeOpinionsService: RecipeOpinionsService) { }

  ngOnInit(): void {
    this.recipeOpinionsService.getOpinions().subscribe(
      opinions => this.opinions = opinions      
    );
  }

}
