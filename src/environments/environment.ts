// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  version: 'x.y.z',
  prefix: 'aesolicitudes',
  production: false,
  standalone: false,
  msal: {
    clientId: 'your-client-Id',
    authority: 'your-authority',
    redirectUri: 'http://localhost:4204'
  },  
  urlms: 'http://localhost:8080'
};

