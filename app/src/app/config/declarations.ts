import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NAuthGuardService } from 'neutrinos-seed-services';
window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-registerService
import { registerService } from '../services/register/register.service';
//CORE_REFERENCE_IMPORT-hackathonComponent
import { hackathonComponent } from '../components/hackathonComponent/hackathon.component';
//CORE_REFERENCE_IMPORT-registerComponent
import { registerComponent } from '../components/registerComponent/register.component';
//CORE_REFERENCE_IMPORT-criteriaComponent
import { criteriaComponent } from '../components/criteriaComponent/criteria.component';
//CORE_REFERENCE_IMPORT-ArtImgSrcDirective
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
//CORE_REFERENCE_IMPORT-loaderComponent
import { loaderComponent } from '../components/loaderComponent/loader.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/

export const appEntryComponents: any = [
  loaderComponent
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-hackathonComponent
hackathonComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-registerComponent
registerComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-criteriaComponent
criteriaComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ArtImgSrcDirective
ArtImgSrcDirective,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loaderComponent
loaderComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-registerService
registerService,

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent,
children: [{path: '', component: hackathonComponent},{path: 'criteria', component: criteriaComponent},{path: 'register', component: registerComponent}]},{path: 'login', component: loginComponent},{path: 'unauthorized', redirectTo: '/login', pathMatch: 'full', canActivate: [NAuthGuardService]},{path: 'criteria', component: criteriaComponent},{path: 'register', component: registerComponent},{path: '', redirectTo: '/home', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
