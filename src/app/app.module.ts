import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from "./services/auth.service";
import { PropertyService } from "./services/property.service";
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { routing } from "./app.routing";
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProtectedComponent } from './protected/protected.component';
import { HeaderComponent } from './header/header.component';
import { LatestpropertiesComponent } from './latestproperties/latestproperties.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { TruncateHtmlPipe } from './pipes/truncate-html.pipe';
import { PropertyItemComponent } from './properties/property-item/property-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    LoginComponent,
    RegisterComponent,
    ProtectedComponent,
    HeaderComponent,
    LatestpropertiesComponent,
    HomeComponent,
    FooterComponent,
    PropertiesComponent,
    PropertyListComponent,
    TruncateHtmlPipe,
    PropertyItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [AuthService,PropertyService,AuthGuard,AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
