import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { WwnfcSharedModule } from 'app/shared/shared.module';
import { WwnfcCoreModule } from 'app/core/core.module';
import { WwnfcAppRoutingModule } from './app-routing.module';
import { WwnfcHomeModule } from './home/home.module';
import { WwnfcEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    WwnfcSharedModule,
    WwnfcCoreModule,
    WwnfcHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    WwnfcEntityModule,
    WwnfcAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class WwnfcAppModule {}
