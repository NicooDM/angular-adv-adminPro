import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme =document.querySelector('#theme')

  constructor() {
    console.log('settings service')
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css'
    this.linkTheme?.setAttribute('href',url)
    console.log(this.linkTheme)
   }

   cambiar(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
   // console.log(this.linkTheme);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }
  checkCurrentTheme() {
   const link=document.querySelectorAll('.selector');
    link.forEach((element: any) => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeURL = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeURL === currentTheme) {
        element.classList.add('working');
      }
    });
  }
}
