import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GeneratorPage } from './generator.page';

import { GeneratorPageRoutingModule } from './generator-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneratorPageRoutingModule
  ],
  declarations: [GeneratorPage]
})
export class GeneratorPageModule {}
