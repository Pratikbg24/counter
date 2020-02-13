import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewComponent } from './component/new/new.component';
import { OnChangComponent } from './component/on-chang/on-chang.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';import { from } from 'rxjs';
import { ViewChildParentComponent } from './component/view-child-parent/view-child-parent.component';
import { ChildMessageComponent } from './component/child-message/child-message.component';
import { CoundownTimerComponent } from './component/coundown-timer/coundown-timer.component';
import { CountdownParentComponent } from './component/countdown-parent/countdown-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    OnChangComponent,
    ViewChildParentComponent,
    ChildMessageComponent,
    CoundownTimerComponent,
    CountdownParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
