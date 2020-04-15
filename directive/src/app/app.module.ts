import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectComponent } from './direct/direct.component';
import { BasicBackgroundDirective } from './basic-background/basic-background.directive';
import { BetterBackgroundDirective } from './basic-background/better-background.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectComponent,
    BasicBackgroundDirective,
    BetterBackgroundDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
