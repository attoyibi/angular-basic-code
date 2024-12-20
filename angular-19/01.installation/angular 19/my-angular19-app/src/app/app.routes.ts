// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ImageUploadComponent } from './shared/components/image-upload/image-upload.component';

export const routes: Routes = [
    { path: '', component: ImageUploadComponent }, // Route untuk "/"
    { path: '**', redirectTo: '' }, // Redirect jika rute tidak ditemukan
];

export const appRouterProviders = [
    provideRouter(routes), // Provider rute untuk aplikasi
];
