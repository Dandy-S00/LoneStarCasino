# Deployment

The production deployment is configured to run `npm run build:protected`. This first creates the Vite production bundle and then obfuscates only the generated browser JavaScript under `dist/assets`.

The generated `dist` directory should not be committed manually. It is recreated on each deployment so the bundle always matches the current source and lockfile.
