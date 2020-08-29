# CompanyProfile

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## ng g c for komponen

ng g c ( buat komponen ) 
ng g c --skipTests false / ng g c --skipTests true ( for file spec )

## ng g d for directive

ng g c ( buat directive )

## lifecycle angular

generate in ngOnInit(): void 

-ngOnChanges -> called after a bound input property changes
-ngOnInit -> called once the component is initialized
-ngDoCheck -> called during every change detection run
-ngAfterContentInit -> called after content (ng-content) has been projected into view
-ngAfterContentChecked -> called every time the projected content has been checked
-ngAfterViewChecked -> called every time the view ( and child views ) have been checked 
-ngOnDestroy -> called once the component is about to be destroyed

## angular 8+

for @ViewChild and @ContentChild

The same change (add { static: true } as a second argument) needs to be applied to ALL usages of @ContentChild() if you use the selected element inside of ngOnInit (as we do it in the lectures).

If you DON'T use the selected element in ngOnInit, set static: false instead.

ex : @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
ex : @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;