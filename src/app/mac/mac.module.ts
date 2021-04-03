import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MacRoutingModule } from './mac-routing.module';

import { MacComponent } from './mac.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MacComponent],
  imports: [CommonModule, SharedModule, MacRoutingModule]
})
export class MacModule {}
