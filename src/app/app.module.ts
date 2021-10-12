import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { XComponent } from './x/x.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SearchLibModule, SEARCH_SERVICE_TOKEN} from 'search-lib';
import { SearchService } from './search.service';
@NgModule({
  declarations: [
    AppComponent,
    XComponent
  ],
  imports: [
    BrowserModule,
    SearchLibModule, //import SearchLibModule
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: SEARCH_SERVICE_TOKEN, useExisting: SearchService }], //Add your service here
  bootstrap: [AppComponent]
})
export class AppModule { }
