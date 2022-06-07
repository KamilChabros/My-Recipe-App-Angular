import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Opinion } from './model/Opinions';
import { Recipe } from './recipe';
import { RecipeOpinionsService } from './recipe-opinions/recipe-opinions.service';
import { RecipeService } from './recipe.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// was export class AppComponent implements OnInit {
export class AppComponent {
  title = 'myrecipeapp';
  public recipes: Recipe[] = [];
  public opinions: Opinion[] = []; // checking for printing opinions
  public editRecipe!: Recipe;
  public deleteRecipe!: Recipe;
  public commentRecipe!: Recipe;
  public longRecipe!: Recipe;
  // below code added for login & register user
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showCreatorBoard = false;
  showEditorBoard = false;
  username?: string;

  constructor(private recipeService: RecipeService, private recipeOpinionsService: RecipeOpinionsService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getRecipes();
    // this.getOpinionsByRecipeId(recipeId:);
    // below code added for login user
    // !! casting variable to boolean
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showCreatorBoard = this.roles.includes('ROLE_CREATOR');
      this.showEditorBoard = this.roles.includes('ROLE_EDITOR');
      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  // this is end of added code for login user
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

  public getOpinions(): void {
    this.recipeOpinionsService.getOpinions().subscribe(
      (response: Opinion[]) => {
        this.opinions = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getOpinionsByRecipeId(recipeId: number): void {
    this.recipeOpinionsService.getOpinionsByRecipeId(recipeId).subscribe(
      (response: Opinion[]) => {
        this.opinions = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddRecipe(addForm: NgForm): void {
    document.getElementById('add-recipe-form')?.click()
    this.recipeService.addRecipe(addForm.value).subscribe(
      (response: Recipe) => {
        console.log(response);
        this.getRecipes();
        addForm.reset(); // clears the form after adding recipe
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
        addForm.reset();
      }
    )
  }

  public onUpdateRecipe(recipe: Recipe): void {
    this.recipeService.updateRecipe(recipe).subscribe(
      (response: Recipe) => {
        console.log(response);
        this.getRecipes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public onDeleteRecipe(recipeId: number): void {
    this.recipeService.deleteRecipe(recipeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getRecipes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public searchRecipes(key: string): void {
    const results: Recipe[] = [];
    // this.recipes is that declared above
    for (const recipe of this.recipes) {
      if (recipe.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || recipe.tags.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || recipe.ingredients.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(recipe);
      }
    }
    this.recipes = results;
    if (results.length === 0 || !key) {
      this.getRecipes();
    }
  }

  public onOpenModal(recipe: Recipe, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button'; // button by default is submit
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRecipeModal');
    }
    if (mode === 'edit') {
      this.editRecipe = recipe;
      button.setAttribute('data-target', '#updateRecipeModal');
    }
    if (mode === 'delete') {
      this.deleteRecipe = recipe;
      button.setAttribute('data-target', '#deleteRecipeModal');
    }
    if (mode === 'comments') {
      this.commentRecipe = recipe;
      button.setAttribute('data-target', '#commentsModal')
    }
    if (mode === 'recipe') {
      this.longRecipe = recipe;
      button.setAttribute('data-target', '#recipeModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
