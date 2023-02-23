import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customFunction():void;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
 
})
export class PagesComponent implements OnInit {
  
  ngOnInit(): void {
   // const url = `./assets/css/colors/${theme}.css`
   customFunction();
  

    
  }
  constructor(private settings : SettingsService){}


}
