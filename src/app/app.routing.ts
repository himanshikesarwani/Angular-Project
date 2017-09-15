import { Routes , RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyItemComponent } from './properties/property-item/property-item.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'propertysearch/:type' , component: PropertyListComponent },
    {path: 'showproperty/:id' , component: PropertyItemComponent },
    {path: 'login', component: LoginComponent},
    {path: 'register' , component: RegisterComponent },
    {path: 'protected', component: ProtectedComponent , canActivate: [AuthGuard] },
    {path: 'logout', component: LoginComponent},
]

export const routing = RouterModule.forRoot(APP_ROUTES);