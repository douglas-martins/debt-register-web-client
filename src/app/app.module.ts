import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterModule} from "./footer/footer.module";
import {MenuModule} from "./menu/menu.module";
import {TopBarModule} from "./top-bar/top-bar.module";
import {PagesModule} from "./pages/pages.module";
import {LayoutModule} from "./layout/layout.module";
import {MainComponent} from './main/main.component';
import {ToastrModule} from "ngx-toastr";
import {BaseHttp} from "./shared/base/base-http";
import {NgxMaskModule} from "ngx-mask";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {NgxCurrencyModule} from "ngx-currency";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopBarModule,
    MenuModule,
    NgxCurrencyModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
    FooterModule,
    LayoutModule,
    PagesModule
  ],
  providers: [BaseHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
