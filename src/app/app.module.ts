import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { ActiveDirective } from './active.directive';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { DirectiveExercise1Component } from './directive-exercise1/directive-exercise1.component';
import { DirectiveExercise2Component } from './directive-exercise2/directive-exercise2.component';
import { Exercise1Directive } from './exercise1.directive';
import { Exercise2Directive } from './exercise2.directive';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { SqrtPipe } from "./app.sqrt";
import { NewCompServiceComponent } from './new-comp-service/new-comp-service.component';
import { PracticeServiceService } from "./practice-service.service";
@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NewLoginComponent,
    ActiveDirective,
    DirectiveTestComponent,
    DirectiveExercise1Component,
    DirectiveExercise2Component,
    Exercise1Directive,
    Exercise2Directive,
    PipeTestComponent,
    SqrtPipe,
    NewCompServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PracticeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
