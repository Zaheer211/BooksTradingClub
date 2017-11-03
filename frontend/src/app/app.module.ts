import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from "angular2-materialize";
import { UserService } from './services/user.service';
import { BookService } from './services/book.service';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { BooksComponent } from './components/books/books.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SavedBooksComponent } from './components/saved-books/saved-books.component';
import { BorrowedBooksComponent } from './components/borrowed-books/borrowed-books.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    BooksComponent,
    DashboardComponent,
    SavedBooksComponent,
    BorrowedBooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'user/createAccount',
        component: SignupComponent
      },
      {
        path: 'user/authenticate',
        component: SigninComponent
      },
      {
        path: 'books',
        component: BooksComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard/:username',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'savedBooks/:username',
        component: SavedBooksComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'borrowedBooks/:username',
        component: BorrowedBooksComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'book/:title',
        component: BookComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [ UserService, BookService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
