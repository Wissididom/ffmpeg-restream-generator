import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeneratorPage } from './generator.page';

import { GeneratorPageRoutingModule } from './generator-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GeneratorPageRoutingModule
  ],
  declarations: [GeneratorPage]
})
export class GeneratorPageModule {}
