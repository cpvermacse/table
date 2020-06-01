import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },

  {
    path: "",
    redirectTo: "driver-details",
    pathMatch: "full",
  },
  // {
  //   path: "table",
  //   loadChildren: () =>
  //     import("./table/table.module").then((m) => m.TablePageModule),
  // },
  {
    path: "driver-details",
    loadChildren: () =>
      import("./driver-details/driver-details.module").then(
        (m) => m.DriverDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
