# AngularAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

# setup

`npm install`

(`npm install -g @angular/cli`)

`ng build --prod`


Save visual studio solution

Restore nuget packages

\*Run

\*If IIS says the url is wrong look in Documents\IISExpress\config\applicationhost.config for what ports localhost have registered and change the project port to that

To run with `ng serve` instead change:

`index.hmtl` - `<base href>` to `/`

`app/people.service.ts`	- `apiUrl` to `http://localhost:<your_server_port>/Api`


then run the server and view the site on :4200 or whatever port `ng serve` gives you
