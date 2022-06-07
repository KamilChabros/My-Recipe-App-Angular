import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Opinion } from '../model/Opinions';

@Injectable({
  providedIn: 'root'
})
export class RecipeOpinionsService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getOpinions(): Observable<Opinion[]> {
    return this.http.get<Opinion[]> (`${this.apiServerUrl}/api/opinions/all`)
  }

  // public getOpinionsByRecipeId(): Observable<Opinion[]> {
  //   return this.http.get<Opinion[]> (`${this.apiServerUrl}/api/opinions/all`)
  // }

  public getOpinionsByRecipeId(id: number): Observable<Opinion[]> {
    return this.http.get<Opinion[]> (`${this.apiServerUrl}/api/opinions/opinionByRecipeId/${id}`)
  }
  public addOpinion(id: number, opinion: Opinion): Observable<Opinion[]> {
    return this.http.post<Opinion[]> (`${this.apiServerUrl}/api/opinions/${id}`, opinion)
  }
}
