import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { DashboardPlaylistsComponent } from "./dashboard-playlists/dashboard-playlists.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const dashboardRoutes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                children: [
                    { path: "", component : DashboardPlaylistsComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class DashboardRoutingModule {};

