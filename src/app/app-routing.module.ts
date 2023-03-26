import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './shared/pages/landing/landing.component';
import { AppMainComponent } from './app.main.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
};

const routes: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full' },
    {
        path: '',
        component: AppMainComponent,
        children: [
            { path: '', redirectTo: 'installation', pathMatch: 'full' },
            { path: 'installation', loadChildren: () => import('./shared/pages/installation/installation.module').then((m) => m.InstallationModule) },
            { path: 'button', loadChildren: () => import('./shared/pages/button/buttondemo.module').then((m) => m.ButtonDemoModule) },

          
        ]
    },
    { path: 'notfound', loadChildren: () => import('./shared/pages/notfound/notfound.module').then((m) => m.NotFoundModule) },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
