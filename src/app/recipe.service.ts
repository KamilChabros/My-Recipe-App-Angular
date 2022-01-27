import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Recipe } from "./recipe";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    private apiServerUrl = '';

    constructor(private http: HttpClient) {}

    public getRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${this.apiServerUrl}/recipe/all`)
    }

    public addRecipe(recipe: Recipe): Observable<Recipe> {
        return this.http.post<Recipe>(`${this.apiServerUrl}/recipe/add`, recipe)
    }

    public updateRecipe(recipe: Recipe): Observable<Recipe> {
        return this.http.put<Recipe>(`${this.apiServerUrl}/recipe/update`, recipe)
    }

    public deleteRecipe(recipeId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/recipe/delete/${recipeId}`)
    }
}