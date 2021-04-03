import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LinuxComponent } from './linux.component';

const routes: Routes = [
  {
    path: 'linux',
    component: LinuxComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinuxRoutingModule {};
