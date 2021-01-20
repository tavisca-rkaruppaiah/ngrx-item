import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ItemReducer } from './store/reducers/item.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      items : ItemReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
