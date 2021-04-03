import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowsRoutingModule } from './windows-routing.module';

import { WindowsComponent } from './windows.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WindowsComponent],
  imports: [CommonModule, SharedModule, WindowsRoutingModule]
})
export class WindowsModule {}
