import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WindowsComponent } from './windows.component';

const routes: Routes = [
  {
    path: 'windows',
    component: WindowsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindowsRoutingModule {};
