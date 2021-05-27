import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
    //canActivate: [AuthGuard],
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
