import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DriverDetailsPageRoutingModule } from "./driver-details-routing.module";

import { DriverDetailsPage } from "./driver-details.page";
import { Ng5SliderModule } from "ng5-slider";
import { Ng2SmartTableModule } from "ng2-smart-table";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng5SliderModule,
    Ng2SmartTableModule,

    DriverDetailsPageRoutingModule,
  ],
  declarations: [DriverDetailsPage],
})
export class DriverDetailsPageModule {}
