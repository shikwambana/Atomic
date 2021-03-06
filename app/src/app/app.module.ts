import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { appDeclarations, appBootstrap, appProviders, appEntryComponents } from './config/declarations';
import { appImportModules } from './config/import-modules';
import {CountDown} from "ng2-date-countdown";
// import { Ng2CarouselamosModule } from 'ng2-carouselamos';
// import { NgxSlidesModule } from 'ngx-slides'

@NgModule({
  declarations: [...appDeclarations, CountDown],
  imports: [...appImportModules],
  providers: [...appProviders],
  entryComponents: [...appEntryComponents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [...appBootstrap]
})
export class AppModule { }
