# Angular Seminar

#Inhalt
<!-- vscode-markdown-toc -->
* 1. [Ausführung und Installation mittels Visual Studio Code](#AusfhrungundInstallationmittelsVisualStudioCode)
	* 1.1. [ACHTUNG](#ACHTUNG)
	* 1.2. [Hilfsfunktionen für VS Code](#HilfsfunktionenfrVSCode)
	* 1.3. [Extensions für VS Code](#ExtensionsfrVSCode)
	* 1.4. [Emmet Cheatsheets](#EmmetCheatsheets)
	* 1.5. [Debugen in Angular](#DebugeninAngular)
	* 1.6. [TypeScript](#TypeScript)
	* 1.7. [Javascript](#Javascript)
	* 1.8. [Bootstrap](#Bootstrap)
	* 1.9. [Jquery](#Jquery)
	* 1.10. [Angular](#Angular)
		* 1.10.1. [Installation](#Installation)
		* 1.10.2. [Prüfung der Installation](#PrfungderInstallation)
		* 1.10.3. [Server für das Angular Projekt starten](#ServerfrdasAngularProjektstarten)
		* 1.10.4. [Cheatsheet](#Cheatsheet)
* 2. [JavaScript](#JavaScript)
* 3. [TypeScript](#TypeScript-1)
	* 3.1. [TSLint](#TSLint)
	* 3.2. [Variablen](#Variablen)
		* 3.2.1. [var](#var)
		* 3.2.2. [Variablen-Typen](#Variablen-Typen)
	* 3.3. [Funktionen](#Funktionen)
		* 3.3.1. [Optionale Angabe von Parametern](#OptionaleAngabevonParametern)
		* 3.3.2. [Parameter mit eigenem Datentyp](#ParametermiteigenemDatentyp)
* 4. [Angular](#Angular-1)
	* 4.1. [Anlage eins Projekts](#AnlageeinsProjekts)
	* 4.2. [Anlage einer Komponente](#AnlageeinerKomponente)
	* 4.3. [Anlage einer Direktive](#AnlageeinerDirektive)
	* 4.4. [Anlage einer Pipe](#AnlageeinerPipe)
	* 4.5. [Anlage eines Services](#AnlageeinesServices)
	* 4.6. [Wechseln zum Projekt](#WechselnzumProjekt)
	* 4.7. [Aufbau des Projekts](#AufbaudesProjekts)
	* 4.8. [Angular Anatomie](#AngularAnatomie)
		* 4.8.1. [Module](#Module)
		* 4.8.2. [Component](#Component)
		* 4.8.3. [MVVM](#MVVM)
		* 4.8.4. [Bindings](#Bindings)
		* 4.8.5. [Directives (TwoWayBinding)](#DirectivesTwoWayBinding)
		* 4.8.6. [Listen durchlaufen](#Listendurchlaufen)
		* 4.8.7. [Class zur Laufzeit setzen](#ClasszurLaufzeitsetzen)
		* 4.8.8. [Elemente anklicken und Events aufrufen](#ElementeanklickenundEventsaufrufen)
		* 4.8.9. [Structural Directives](#StructuralDirectives)
		* 4.8.10. [Zugriff auf Elemente](#ZugriffaufElemente)
		* 4.8.11. [Arguments/Parameter](#ArgumentsParameter)
		* 4.8.12. [Dependency Injection](#DependencyInjection)
		* 4.8.13. [Directiven](#Directiven)
		* 4.8.14. [String Templates](#StringTemplates)
		* 4.8.15. [Objekte kopieren](#Objektekopieren)
		* 4.8.16. [Services](#Services)
		* 4.8.17. [Routes](#Routes)
		* 4.8.18. [Callbacks](#Callbacks)
		* 4.8.19. [Tests](#Tests)
		* 4.8.20. [Struktur](#Struktur)
		* 4.8.21. [Auslieferung](#Auslieferung)
		* 4.8.22. [Eigene "Shared Modules"](#EigeneSharedModules)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

##  1. <a name='AusfhrungundInstallationmittelsVisualStudioCode'></a>Ausführung und Installation mittels Visual Studio Code

###  1.1. <a name='ACHTUNG'></a>ACHTUNG 
Nutzung des Projekts
- Nach Abruf über git, bitte npm install oder npm update im Terminal durchführen, dann werden alle Module nachgeladen die notwendig sind
- Installierung von nodejs unter Windows notwendig um die Path Variable npm zu nutzen

###  1.2. <a name='HilfsfunktionenfrVSCode'></a>Hilfsfunktionen für VS Code
- https://code.visualstudio.com/docs/getstarted/tips-and-tricks
- https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- https://code.visualstudio.com/docs/getstarted/keybindings
- Aufruf durch F1
    - Wenn > hinterlegt ist, werden Funktionen aufgeführt
    - Ohne > kann man nach Dateien suchen
- STRG + B für Explorer links zuklappen

###  1.3. <a name='ExtensionsfrVSCode'></a>Extensions für VS Code
Installationen durchführen für folgende Extensions:
- Angular Language Service
- Debugger for Chrome
- npm
- TSLint
- Material Icon Theme
- CSS Formatter
- json2ts
    json kopieren und dann mittels STRG + ALT + X wird das Interface dazu eingetragen an der markierten Stelle
- Deutsches Studio falls gewünscht
    - German Language Pack for Visual Studio Code
    - sonst ist Englisch der empfohlene Standard
        - über F1 kann mittels "> Configure Display Language" die Spracheinstellung geändert werden
- Über Datei bzw. File, Automatische Speichern/Autosave aktivieren

###  1.4. <a name='EmmetCheatsheets'></a>Emmet Cheatsheets
- https://docs.emmet.io/cheat-sheet/

###  1.5. <a name='DebugeninAngular'></a>Debugen in Angular
- F5 betätigen
- Chrome auswählen
- Stoppen
- Erzeugte launch.js editieren und den Port auf 4200 anpassen
- Erneut F5 betätigen

###  1.6. <a name='TypeScript'></a>TypeScript
Installation:  
- https://code.visualstudio.com/docs/languages/typescript
- The easiest way to install TypeScript is through npm, the Node.js Package Manager. If you have npm installed, you can install TypeScript globally (-g) on your computer by:

```html
npm install -g typescript
```
You can test your install by checking the version or help.
```html
tsc --version
tsc --help
```
Compilierung:  
Eingabe im Terminal tsc und name der Datei
```html
Beispiel: tcs "typescript - example.ts"
```
Dadurch wird eine ausführbare .js-Datei erzeugt

###  1.7. <a name='Javascript'></a>Javascript
Installation: 
```html
npm install -g javascript
```

Ausführung:  
Eingabe im Terminal node und name der Datei
```html
Beispiel: node "typescript - example.js"
```

###  1.8. <a name='Bootstrap'></a>Bootstrap
Installation: 
```html
npm install --save @ng-bootstrap/ng-bootstrap
```

###  1.9. <a name='Jquery'></a>Jquery
Installation: 
```html
npm install jquery --save
``` 

###  1.10. <a name='Angular'></a>Angular
####  1.10.1. <a name='Installation'></a>Installation  
Eingabe im Terminal
```html
npm install -g angular-cli
```
oder
```html
npm install @angular/cli --global
```

####  1.10.2. <a name='PrfungderInstallation'></a>Prüfung der Installation 
Eingabe im Terminal
```html
ng --version
```

####  1.10.3. <a name='ServerfrdasAngularProjektstarten'></a>Server für das Angular Projekt starten
Eingabe im Terminal
```html
ng serve -o
```
Website wird auf dem Server gestartet und geöffnet

####  1.10.4. <a name='Cheatsheet'></a>Cheatsheet
- https://angular.io/guide/cheatsheet

##  2. <a name='JavaScript'></a>JavaScript
Wie ein Dictionary aufgebaut:
```javascript
var person = { name = "Name"};

person.vorname = "Vorname";
```

Dadurch wird direkt die Eigenschaft vorname für das Objekt person erzeugt

ACHTUNG  
Andersherum nicht möglich.

##  3. <a name='TypeScript-1'></a>TypeScript
Kompiliert aus dem TypeScript Code neuen ausführbaren JavaScript Code.

Code testen:  
- http://www.typescriptlang.org/play/

###  3.1. <a name='TSLint'></a>TSLint
An extensible linter for the TypeScript language

###  3.2. <a name='Variablen'></a>Variablen
####  3.2.1. <a name='var'></a>var
```typescript
var xyz = 'Brendan Eich';

xyz = 123
```

Zuweisung des Strings zur Variable xyz macht die Variable zu einer String-Variable.  
Nun sind alle Eigenschaften eines Typ Strings für die Variable verfügbar.  
Erneute Zuweisung mit einem anderen Typ in TypeScript per Standard nicht möglich.  Variable ist jetzt ein String.

####  3.2.2. <a name='Variablen-Typen'></a>Variablen-Typen
```typescript
String text = 'text';
boolean wahrheit=true;
number nummer = 1;
object o = { name = 'Script'};
undefined
```

###  3.3. <a name='Funktionen'></a>Funktionen
```typescript
function foo(text: string, nummer: number): string | number
{
    var x = "";
    //Prüfung ob x leer ist wird mit false zurückgegeben, wenn x == ""
    if(x){

    }
    console.log(text);
    console.log(nummer);
    return x || "Kein Wert";
}

foo( text = "Text", nummer = 4);
```
ACHTUNG  
Überlandene Methoden mit verschiedenen Rückgabetypen oder Parameter Auflistung nicht vorhanden in JavaScript und TypeScript.

####  3.3.1. <a name='OptionaleAngabevonParametern'></a>Optionale Angabe von Parametern
```typescript
//Optionale Angabe von company möglich
function foo(name: string, company?: string): string | number
{
    var x = "";
    //Prüfung ob x leer ist wird mit false zurückgegeben wenn x == ""
    if(x){

    }
    return x || "Kein Wert";
}

foo({ name = "Text"});
```

####  3.3.2. <a name='ParametermiteigenemDatentyp'></a>Parameter mit eigenem Datentyp
```typescript
interface Company {
    name: string,
    city : string,
    value?: number
}
function foo(company: Company): string
{    
    console.log(company.name);
    return company.name;
}

//{} -> Objekt wird mit der Eigenschaft name und city übergeben, value bleibt leer
foo({ name: "Text", city: "Nuremberg"});
```

##  4. <a name='Angular-1'></a>Angular
Kürzel ng für Angular-cli
exit
###  4.1. <a name='AnlageeinsProjekts'></a>Anlage eins Projekts
Eingabe im Terminal:
```html
ng new MyTodoApp

Frage "Would you like to add Angular routing? (y/N)"
-> mit "n" beantworten

Which stylesheet format would you like to use? 
-> mittels Pfeiltaste auswählen und bestätigen
```

###  4.2. <a name='AnlageeinerKomponente'></a>Anlage einer Komponente
```html
ng generate component todolist
```
oder
```html
ng g c todolist
```
Erzeugt folgende Dateien
```html
CREATE src/app/todolist/todolist.component.html (27 bytes)
CREATE src/app/todolist/todolist.component.spec.ts (642 bytes)
CREATE src/app/todolist/todolist.component.ts (277 bytes)
CREATE src/app/todolist/todolist.component.css (0 bytes)
```
Trägt die Komponente im App Module ein
```html
UPDATE src/app/app.module.ts (404 bytes)
```

###  4.3. <a name='AnlageeinerDirektive'></a>Anlage einer Direktive
```html
ng generate directive AutoInputWidth
```
oder
```html
ng g d AutoInputWidth
```
Erzeugt folgende Dateien
```html
CREATE src/app/auto-input-width.directive.spec.ts (258 bytes)
CREATE src/app/auto-input-width.directive.ts (157 bytes)
```
Trägt die Directive im App Module ein
```html
UPDATE src/app/app.module.ts (568 bytes)
```
Kann anschließend als Attribut in allen Elementen genutzt werden

###  4.4. <a name='AnlageeinerPipe'></a>Anlage einer Pipe
```html
ng generate directive AutoInputWidth
```
oder
```html
ng g p myuppercase
```
Erzeugt folgende Dateien
```html
CREATE src/app/myuppercase.pipe.spec.ts (207 bytes)
CREATE src/app/myuppercase.pipe.ts (211 bytes)
```
Trägt die Pipe im App Module ein
```html
UPDATE src/app/app.module.ts (643 bytes)
```
Kann anschließend als neue Pipe in den Bindings genutzt werden und eigene Konvertierungen angeben.

###  4.5. <a name='AnlageeinesServices'></a>Anlage eines Services
```html
ng generate service chucknorris
```
oder
```html
ng g s chucknorris
```
Erzeugt folgende Dateien
```html
CREATE src/app/chucknorris.service.spec.ts (358 bytes)
CREATE src/app/chucknorris.service.ts (140 bytes)
```
Kann anschließend als neuer Service genutzt werden.
ACHTUNG  
Es muss nachträglich in den providers eingetragen werden, für die Komponente die ihn nutzen soll. Sollen es alle Komponenten nutzen, kann es in der app.module.ts hinterlegt werden.
```html
providers: [ChucknorrisService]
```

Hinterlegen von HttpClientModule unter app.module.ts
```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [...
  ],
  imports: [...
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

Einbinden des HttpClient inder service.ts
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {

  constructor(private httpClient: HttpClient) { }

  getJoke() {
    this.httpClient.get('https://api.chucknorris.io/jokes/random?category=category=dev');
  }
}
```
Der Service kann dann mittels private Deklarierung im constructor global genutzt werden

###  4.6. <a name='WechselnzumProjekt'></a>Wechseln zum Projekt
Eingabe im Terminal:
```html
- Wechseln über "cd MyTodoApp" in das Verzeichnis
- Mittels "code ." das Projekt in Visual Studio Code eigenständig öffnen
```

###  4.7. <a name='AufbaudesProjekts'></a>Aufbau des Projekts
- e2e
    - end-to-end tests vorinstalliert
- node_modules
    - Hilfsmodule
- src
    - Applikationscode
        - app
    - Umgebungsvariablen
        - environments
    - Einstiegspunkt der Applikation
        - main.ts
    - Rest
- Rest
    - Konfigurationsdateien
        - Versionsverwaltung
            - .gitignore
        - Konfigurationsdatei des Projekts für den workspace
            - angular.json
            - https://nitayneeman.com/posts/understanding-the-angular-cli-workspace-file/
        - Sicherheit und Installierte packages für das Projekt
            - package-lock.json
            - package.json
        - Hilfe zum Projekt
            - README.md
        - Konfigurationsdatei für den TypeScript-Compiler
            - tsconfig.json
        - Konfigurationsdatei für TSLint
            - tslint.json 

###  4.8. <a name='AngularAnatomie'></a>Angular Anatomie

####  4.8.1. <a name='Module'></a>Module
Vergleichbar mit Assemblies
- Ausführbar (*.exe)
    - Application Module
- Teilbar (*.dll)
    - Shared Module, Feature Module
- Annotation @NgModule definiert das Module in der app.module.ts
    - declarations
    - imports
    - providers
    - bootstrap
        - Startpunkt der App

####  4.8.2. <a name='Component'></a>Component
Vergleichbar mit UserControls
- Sind eigenständige HTML-Elemente
- Annotation @Component definiert das Component in der app.component.ts
    - selector
        - Name mit dem man die Komponente einbinden kann
        - z.b. 
        ```typescript 
        <app-root>
        ```
    - Inhaltsherkunft
        - templateUrl
    - Designherkunft der styles für die component
        - styleUrls
- Arten: 
    - Header
    - Nav
    - Content
    - Footer

####  4.8.3. <a name='MVVM'></a>MVVM
Model-View-ViewModel

- View -> HTML Dokument
- ViewModel
    - todoText:string
        - TextBox
    - todos[]
        - Liste in HTML
    - addTodo()
        - OK Button zum hinzufügen
- Model (Services)
    - Wird in der Datei .ts in er Klasse beschrieben
        ```typescript
        todoText = ''; -> TextBox
        todos: string[] = []; -> Liste
        addTodo() {  } -> OK Button-Aktion
        ```

####  4.8.4. <a name='Bindings'></a>Bindings

##### Data-/Attribute-Binding
Zur Kommunikation zwischen View und Model
- In der .ts-Klasse gibt man die Eigenschaften an, an die man über das HTML Dokumente mittels z.B. {{ }} binden kann
    - Interpolation-Binding
    - One-Way Binding (Das ViewModel schickt die Daten an das View, nicht umgekehrt)
- Im HTML Dokument kann man nun an das Model binden
    - OneWay Binding
        ```typescript
        [value]="todoText"
        ```
        oder direkt
        ```typescript
        {{todoText}}
        ```
    
    - TwoWay Binding (mittels Directives)
        ```typescript
        [(ngModel)]="todoText"
        ```
##### Pipe Features
Daten formatieren beim Data Binding
```typescript
{{todo | uppercase}}
```
Ermöglich, dass Bindings an dieser Stelle wie gewünscht dargestellt werden. In diesem Fall immer alle Buchstaben groß

####  4.8.5. <a name='DirectivesTwoWayBinding'></a>Directives (TwoWayBinding)
Vergleichbar mit Markup Extensions
- Vorhandene HTML-Elemente um Logik erweitern
- Einbinden von FormsModule in der app.module.ts
    - https://angular.io/api/forms/NgModel

##### Event-Binding
- OneWay Binding 
    Setzen von () um das Event
    ```typescript
    <button (click)="addTodo()">
    ```

####  4.8.6. <a name='Listendurchlaufen'></a>Listen durchlaufen
```typescript
<li *ngFor="let todo of todos; let i = index">
    {{ todo }} <button (click)="removeTodo(i)">X</button>
</li>
```

####  4.8.7. <a name='ClasszurLaufzeitsetzen'></a>Class zur Laufzeit setzen
```typescript
[ngClass]="{'selectItem': todoUpdateIndex === i}"
```
In den {} wird durch den Key der zugehörige Value abgefragt, dabei muss der Key -> selectItem in '' gesetzt sein.  
Die Klasse die gesetzt werden soll, wird vor dem : gestellt.  
Nach dem : wird die Bedingung gesetzt. Wird diese mit true zurückgegeben, wird die neue class für das Element gesetzt.

####  4.8.8. <a name='ElementeanklickenundEventsaufrufen'></a>Elemente anklicken und Events aufrufen
```typescript
 <span (click)="editTodo(i)">
 ```
 Es ist möglich auf jedem Element ein click-Event zu abonnieren.  
 Dazu muss (click) gesetzt sein und dahinter die gewünschte Funktion die aufgerufen werden soll in "" gesetzt sein.

####  4.8.9. <a name='StructuralDirectives'></a>Structural Directivess
 - *-Anweisungen (https://angular.io/guide/structural-directives) 
 - Manipulieren die Struktur (DOM)

 - Beispiel  
    If Anweisungen auf Basis des ViewModels
    ```typescript
    <div *ngIf="!isEditMode">
    ```
    Durch *ngIf können Abfragen gebaut werden, das Element in dem die Abfrage ausgeführt wird, kann dann entsprechend handeln.  
    In diesem Fall wird das div nur angezeigt, wenn isEditMode, false ist.

####  4.8.10. <a name='ZugriffaufElemente'></a>Zugriff auf Elementee
 Zugriff über DOM (native)
```html
<script>
document.getElementsByName("div");
</script>
```
Zugriff über jQuery
```html
<script>
$("h1")
</script>
```
ACHTUNG  
Im Vergleich dauert jQuery zum DOM-Zugriff zum Teil 40 mal länger

####  4.8.11. <a name='ArgumentsParameter'></a>Arguments/Parameter
```typescript
function foo(paramA, paramB = "Kein Wert", paramC = "Kein Wert")
{
    console.log(paramA);
    console.log(paramB);
    console.log(paramC);
}

foo("Hallo", "Welt");
//Hallo
//Welt
//Kein Wert

var values =["Hallo", "Welt", "Wuhuu", "abc"]
foo(...values);
//Hallo
//Welt
//Wuhuu
```
- ... ermöglicht beliebig viele Parameter mitzugeben  
- https://www.typescriptlang.org/docs/handbook/functions.html

####  4.8.12. <a name='DependencyInjection'></a>Dependency Injection
- Übernimmt die Instanzierung von Klassen automatisch
- https://angular.io/guide/dependency-injection

####  4.8.13. <a name='Directiven'></a>Directiven
```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoInputWidth]'
})

export class AutoInputWidthDirective {
  inputElement: HTMLInputElement;

  constructor(elementRef: ElementRef) {
    this.inputElement = elementRef.nativeElement;
  }
```
- Das ElementRef weiß nicht von welchem Typ es ist, somit kann man nicht auf die Eigenschaften zugreifen.  
Durch die Deklarierung eines Objekts vom erwarteten Typ und der Übernahme des nativeElement in das deklarierte Objekt ist ein Zugriff auf alle Eigenschaften möglich.  
Dadurch wird Typsicherheit ermöglicht.

####  4.8.14. <a name='StringTemplates'></a>String Templates
```typescript
this.inputElement.style.width = `${width}px`;
```
oder
```typescript
this.inputElement.style.width = width + "px";
```
Ermöglicht das Einfügen von Variablen direkt in einem String 

####  4.8.15. <a name='Objektekopieren'></a>Objekte kopieren
```typescript
var person = {name: "Brendan Eich"};
var person2 = Object.assign({}, person)
```
Dadurch wird eine Kopie von person angelegt, und das person2 Objekt ist komplett unabhängig von Änderungen des person-Objects.

####  4.8.16. <a name='Services'></a>Services

- Service anlegen mittels ng -> siehe Anlage Services
- Nutzung von json2ts -> Erzeugtes Interface in der service.ts hinterlegen
    ```typescript
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    @Injectable({
    providedIn: 'root'
    })
    export class ChucknorrisService {

    constructor(private httpClient: HttpClient) { }

    getJoke() {
        return this.httpClient.get<Joke>('https://api.chucknorris.io/jokes/random?category=dev');
    }
    }

    export interface Joke {
    category: string[];
    icon_url: string;
    id: string;
    url: string;
    value: string;
    }
    ```
    beim zurückgeben des Streams muss das Objekt bei get<> angegeben, dies wird mittels dem erzeugten interface ermöglicht.
- Zugriff über component.ts
    ```typescript
    this.chucknorrisServer.getJoke().subscribe(joke =>
    this.todoText = joke.value);
    ```
    Nun kann man auf das Property Value des Objekts zugreifen

####  4.8.17. <a name='Routes'></a>Routes
Routen definieren unter app.module.ts mittels RouterModule
```typescript
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [...
  ],
  imports: [...
    RouterModule.forRoot([
      { path: '', component: TodolistComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
Dadurch wird mit dem path '' (Website Einstieg) definiert, dass die TodolistComponent angezeigt werden soll

- RouterLink bei click markieren
    ```typescript
    <a routerLink="/" routerLinkActive="clicked" [routerLinkActiveOptions]="{ exact: true}">Home</a>
    ```
    ```css
    .clicked {
        background-color: gray;
        color: white;
        font-weight: bold;
    }
    ```
- Routerlink über Event aufrufen
    Aufruf mittels
    ```typescript
    <button (click)="goToAbout()">Gehe zu About</button>
    ```
    Zugehörige Funktion
    ```typescript
    import { Router } from '@angular/router';

    export class TodolistComponent {

    constructor(...
        private router: Router) { }

    goToAbout() {
        this.router.navigate(['/about']);
    }
    ```
- Undefinierte Routen
    ```typescript
    RouterModule.forRoot([
        { ... },
        { path: '**', component: NotFoundComponent }
    ])
    ```
    Weitere Route definieren unter app.module.ts

 - Aktuelle Seite über Refresh erneut laden lassen  
    - https://medium.com/engineering-on-the-incline/reloading-current-route-on-click-angular-5-1a1bfc740ab2  
    - Alternative  
        In app.component.ts
        ```typescript 
        //Service zur Verfügung stellen, der für Aktualisierung wichtig ist
        constructor(private searchService: SearchService) { }

        updateData() {
            this.searchService.refresh.emit();
        }
        ```
        In app.component.html
        ```typescript 
        (click)="updateData()"
        ```
        In allen gewünschten Componenten
        ```typescript 
        export class StocksComponent implements OnInit {
            stocks: Stock[] = [];
            //WICHTIG
            private subscription: Subscription;

            constructor(private stockPlacerholderService: StockPlacerholderService,
                private searchService: SearchService) {
                //WICHTIG
                this.subscription = this.searchService.refresh.subscribe(() => {
                this.ngOnInit();
                });
            }

            ngOnInit() {
                //WICHTIG
                // Set default values and re-fetch any data you need.
                const search: string = this.searchService.getSearchesAsPath();
                if (search) {
                this.stockPlacerholderService.getStock(search).subscribe(
                    receivedStocks => {
                    this.stocks = receivedStocks;
                    }
                );
                }
            }
            
            //WICHTIG
            // tslint:disable-next-line:use-life-cycle-interface
            ngOnDestroy() {
                // avoid memory leaks here by cleaning up after ourselves.
                this.subscription.unsubscribe();
            }
        }
        ```


####  4.8.18. <a name='Callbacks'></a>Callbacks
Sehr wichtiges Thema zum vertiefen
- https://angular.de/artikel/angular2-observables/
- https://angular.de/buecher/angularjs-buch/angularjs-promises/

####  4.8.19. <a name='Tests'></a>Tests
Framework Installation protractor  
Aufruf über Terminal mit
```typescript 
npm install -g protractor
```

Aufruf über Terminal mit
```typescript 
ng e2e
```

Beispiele 
- https://www.protractortest.org/
- https://entwickler.de/online/javascript/angular-testing-579793020.html

####  4.8.20. <a name='Struktur'></a>Struktur
TODO
####  4.8.21. <a name='Auslieferung'></a>Auslieferung
TODO
z.b. Prodmode
Scripte mit Kürzeln für ng build etc...
####  4.8.22. <a name='EigeneSharedModules'></a>Eigene "Shared Modules"
TODO