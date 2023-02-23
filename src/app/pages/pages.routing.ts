import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          {
            path: '',
            component: DashBoardComponent,
          },
          {
            path: 'progress',
            component: ProgressComponent,
          },
          {
            path: 'grafica1',
            component: Grafica1Component,
          },
          {
            path:'accountSettings',
            component:AccountSettingsComponent
          }
        
        ],
      },
   

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule{}
