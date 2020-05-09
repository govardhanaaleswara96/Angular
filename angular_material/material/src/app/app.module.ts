import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatarialModule } from './matarial/matarial.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MatarialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  notification = 10;
}
