import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ManageComponent } from "./manage/manage.component";
import { ShopComponent } from "./shop/shop.component";
import { ManageDetailComponent } from "./manage-detail/manage-detail.component";
import { ManageEditComponent } from "./manage-edit/manage-edit.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "manage", component: ManageComponent },
  { path: "shop", component: ShopComponent },
  { path: "manage/:productID", component: ManageDetailComponent },
  { path: "manage/edit/:productID", component: ManageEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
