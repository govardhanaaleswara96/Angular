import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerContentComponent } from './server-content/server-content.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [AppComponent, ServerContentComponent, ServerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
