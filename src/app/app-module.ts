import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { Education } from './components/education/education';
import { Work } from './components/work/work';
import { Skills } from './components/skills/skills';
import { Interests } from './components/interests/interests';

@NgModule({
  declarations: [
    App,
    Navbar,
    About,
    Education,
    Work,
    Skills,
    Interests
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
