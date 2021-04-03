import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { MacRoutingModule } from './mac/mac-routing.module';
import { LinuxRoutingModule } from './linux/linux-routing.module';
import { WindowsRoutingModule } from './windows/windows-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
    DetailRoutingModule,
    MacRoutingModule,
    LinuxRoutingModule,
    WindowsRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
