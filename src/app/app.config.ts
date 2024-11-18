import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"dondelucho-2b0c1","appId":"1:493541628566:web:4df8ced894e0a14e7880b7","storageBucket":"dondelucho-2b0c1.appspot.com","apiKey":"AIzaSyCjM3IgJ4W5di1LH3-tUaxpPZQSRLZjEO8","authDomain":"dondelucho-2b0c1.firebaseapp.com","messagingSenderId":"493541628566"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
