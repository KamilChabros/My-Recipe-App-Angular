import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeService } from './recipe.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { CreatorBoardComponent } from './creator-board/creator-board.component';
import { EditorBoardComponent } from './editor-board/editor-board.component';
import { UserBoardComponent } from './user-board/user-board.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { RecipeOpinionsComponent } from './recipe-opinions/recipe-opinions.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AdminBoardComponent,
    CreatorBoardComponent,
    EditorBoardComponent,
    UserBoardComponent,
    RecipeOpinionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [RecipeService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
