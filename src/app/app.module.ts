import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import {InputTextModule} from 'primeng/inputtext';
import { MainHeaderComponent } from './layouts/main-header/main-header.component';
import { MainSidebarComponent } from './layouts/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './layouts/main-footer/main-footer.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserFormComponent,
    UserListComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    TableModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
