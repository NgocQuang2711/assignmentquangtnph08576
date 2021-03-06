import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { ManageComponent } from './manage/manage.component';
import { ProductService } from './product.service';
import { HttpClientModule} from "@angular/common/http";
import { ManageEditComponent } from './manage-edit/manage-edit.component';
import { ManageDetailComponent } from './manage-detail/manage-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, ShopComponent, ContactComponent, ManageComponent, ManageEditComponent, ManageDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
