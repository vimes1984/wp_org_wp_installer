import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinuxRoutingModule } from './linux-routing.module';

import { LinuxComponent } from './linux.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LinuxComponent],
  imports: [CommonModule, SharedModule, LinuxRoutingModule]
})
export class LinuxModule {}
