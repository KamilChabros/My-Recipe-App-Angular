import { Component, OnInit } from '@angular/core';
import { Opinion } from '../model/Opinions';

@Component({
  selector: 'app-recipe-opinions',
  templateUrl: './recipe-opinions.component.html',
  styleUrls: ['./recipe-opinions.component.css']
})
export class RecipeOpinionsComponent implements OnInit {

opinions: Opinion[]= [
  {id: 1, user: 'Jan Kowalski', rating: 'OK', content:'Najlepsze szpagetti jakie jadłem', date: '2022-05-16'},
  {id: 2, user: 'Danuta Nowak', rating: 'OK', content:'Klasyka w najlepszym wydaniu', date: '2022-05-16'},
  {id: 3, user: 'Klaudiusz Adamski', rating: 'NOK', content:'Takie średnie bym powiedział', date: '2022-05-16'},
  {id: 4, user: 'Zbigniew Wrotny', rating: 'OK', content:'Polecam, bardzo smaczne ;)', date: '2022-05-16'},
]

  constructor() { }

  ngOnInit(): void {
  }

}
