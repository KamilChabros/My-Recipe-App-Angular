import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { CreatorBoardComponent } from './creator-board/creator-board.component';
import { EditorBoardComponent } from './editor-board/editor-board.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserBoardComponent } from './user-board/user-board.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: UserBoardComponent},
  {path: 'admin', component: AdminBoardComponent},
  {path: 'creator', component: CreatorBoardComponent},
  {path: 'editor', component: EditorBoardComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
