import { ModuleWithProviders } from '@angular/core';
import { Routes, Route, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full',
    },
];

// preloading strategies

// only preload the components which have selected this with 'data: {preload: true}'
export class SelectedPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        // if the route has the attribute 'data' and it is set to true, then make preloading, otherwise lazy loading
        return route.data && route.data['preload'] ? load() : Observable.of(null);
    }
}

// another preloading strategy
export class DelayedPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        // return an observable to inform angular that preload has done its task
        // flatMap triggers the preloading
        return Observable.of(true).delay(7000).flatMap(_ => fn());
    }
}

export const routing: ModuleWithProviders = RouterModule.forRoot(
    appRoutes,
    { preloadingStrategy: SelectedPreloadingStrategy, enableTracing: false },
);

export const APP_ROUTES_MODULE_PROVIDER = [SelectedPreloadingStrategy];

