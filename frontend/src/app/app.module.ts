import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MaterialsComponent } from './pages/materials/materials.component';
import { WidgetCardComponent } from './components/widget-card/widget-card.component';
import {FormsModule} from "@angular/forms";
import { WMaterialsComponent } from './widgets/w-materials/w-materials.component';
import { WContributorsComponent } from './widgets/w-contributors/w-contributors.component';
import { WMoreMaterialsComponent } from './widgets/w-more-materials/w-more-materials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    MaterialsComponent,
    WidgetCardComponent,
    WMaterialsComponent,
    WContributorsComponent,
    WMoreMaterialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
