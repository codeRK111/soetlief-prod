import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoreCoursesProvider } from '@core/courses/providers/courses';
import { s } from '@angular/core/src/render3';
/**
 * Generated class for the CourseCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-category',
  templateUrl: 'course-category.html',
})
export class CourseCategoryPage {

  id:number;
  name:string;
  categoryCourses:any[];
  courses:any[];
  hiddenValu:number;
  iconClose = 'arrow-dropright-circle';
  iconOpen = 'arrow-dropdown-circle';

  constructor(public navCtrl: NavController, public navParams: NavParams,public coreCoursesProvider:CoreCoursesProvider) {
    this.id=this.navParams.get('id');
    this.name=this.navParams.get('name');
    console.log("_______>",this.id);
    coreCoursesProvider.getCategories(0,true).then((data)=>{

      this.categoryCourses=data.filter( cat => {
          return cat.parent == this.id;
      }).sort(function(a, b){return a.id - b.id});
      console.log("-------========>",this.categoryCourses)
  });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseCategoryPage');
  }
  onDropdownIconPressed(id:number,index)
  {
  
    
    this.coreCoursesProvider.getCategories(0,true).then((data)=>{

      this.courses=data.filter( cat => {
          return cat.parent == id;
      }).sort(function(a, b){return a.id - b.id});
      console.log("-------========>+++",this.courses)
  });
  if(this.hiddenValu == id){
    this.hiddenValu = 0
  }
  else {
    this.hiddenValu = id;
  }
  //this.hiddenValu == id;

  console.log("index",this.hiddenValu)
    
  
  }
  onSubCategoryButtonClicked(id:number)
  {
    console.log("ID======>",id);
    this.navCtrl.push('CoreCoursesMyCoursesPage',{id});
  }

  

}
