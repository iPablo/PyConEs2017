import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolsPage } from './schools';
import { SchoolsProvider } from './schools.provider';

@NgModule({
  declarations: [
    SchoolsPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolsPage),
  ],
  providers: [SchoolsProvider]
})
export class SchoolsPageModule {
}
