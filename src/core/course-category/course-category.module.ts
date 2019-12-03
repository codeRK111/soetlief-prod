import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseCategoryPage } from './course-category';

@NgModule({
  declarations: [
    CourseCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseCategoryPage),
  ],
})
export class CourseCategoryPageModule {}
