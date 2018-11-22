# Angular Seminar

## Ausführung und Installation mittels Visual Studio Code

### Hilfsfunktionen für VS Code
- https://code.visualstudio.com/docs/getstarted/tips-and-tricks
- https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- https://code.visualstudio.com/docs/getstarted/keybindings
- Aufruf durch F1
    - Wenn > hinterlegt ist, werden Funktionen aufgeführt
    - Ohne > kann man nach Dateien suchen
- STRG + B für Explorer links zuklappen

### Extensions für VS Code
Installationen durchführen für folgende Extensions:
- Angular Language Service
- Debugger for Chrome
- npm
- TSLint
- Material Icon Theme
- CSS Formatter
- Deutsches Studio falls gewünscht
    - German Language Pack for Visual Studio Code
    - sonst ist Englisch der empfohlene Standard
        - über F1 kann mittels "> Configure Display Language" die Spracheinstellung geändert werden
- Über Datei bzw. File, Automatische Speichern/Autosave aktivieren

### Emmet Cheatsheets
- https://docs.emmet.io/cheat-sheet/

### Debugen in Angular
- F5 betätigen
- Chrome auswählen
- Stoppen
- Erzeugte launch.js editieren und den Port auf 4200 anpassen
- Erneut F5 betätigen

### TypeScript
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

### Javascript
Ausführung:  
Eingabe im Terminal node und name der Datei
```html
Beispiel: node "typescript - example.js"
```

### Angular
#### Installation  
Eingabe im Terminal
```html
npm install -g angular-cli
```
oder
```html
npm install @angular/cli --global
```

#### Prüfung der Installation 
Eingabe im Terminal
```html
ng --version
```

#### Server für das Angular Projekt starten
Eingabe im Terminal
```html
ng serve -o
```
Website wird auf dem Server gestartet und geöffnet

#### Cheatsheet
- https://angular.io/guide/cheatsheet

## JavaScript
Wie ein Dictionary aufgebaut:
```javascript
var person = { name = "Name"};

person.vorname = "Vorname";
```

Dadurch wird direkt die Eigenschaft vorname für das Objekt person erzeugt

ACHTUNG  
Andersherum nicht möglich.

## TypeScript
Kompiliert aus dem TypeScript Code neuen ausführbaren JavaScript Code.

Code testen:  
- http://www.typescriptlang.org/play/

### TSLint
An extensible linter for the TypeScript language

### Variablen
#### var
```typescript
var xyz = 'Brendan Eich';

xyz = 123
```

Zuweisung des Strings zur Variable xyz macht die Variable zu einer String-Variable.  
Nun sind alle Eigenschaften eines Typ Strings für die Variable verfügbar.  
Erneute Zuweisung mit einem anderen Typ in TypeScript per Standard nicht möglich.  Variable ist jetzt ein String.

#### Variablen-Typen
```typescript
String text = 'text';
boolean wahrheit=true;
number nummer = 1;
object o = { name = 'Script'};
undefined
```

### Funktionen
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

#### Optionale Angabe von Parametern
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

#### Parameter mit eigenem Datentyp
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

## Angular
Kürzel ng für Angular

### Anlage eins Projekts
Eingabe im Terminal:
```html
ng new MyTodoApp

Frage "Would you like to add Angular routing? (y/N)"
-> mit "n" beantworten

Which stylesheet format would you like to use? 
-> mittels Pfeiltaste auswählen und bestätigen
```

### Anlage einer Komponente
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

### Anlage einer Direktive
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

### Anlage einer Pipe
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

### Wechseln zum Projekt
Eingabe im Terminal:
```html
- Wechseln über "cd MyTodoApp" in das Verzeichnis
- Mittels "code ." das Projekt in Visual Studio Code eigenständig öffnen
```

### Aufbau des Projekts
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

### Angular Anatomie

#### Module
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

#### Component
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

#### MVVM
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

#### Bindings

##### Data-/Attribute-Binding
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
```typescript
{{todo | uppercase}}
```
Ermöglich, dass Bindings an dieser Stelle wie gewünscht dargestellt werden. In diesem Fall immer alle Buchstaben groß

#### Directives (TwoWayBinding)
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

#### Listen durchlaufen
```typescript
<li *ngFor="let todo of todos; let i = index">
    {{ todo }} <button (click)="removeTodo(i)">X</button>
</li>
```

#### Class zur Laufzeit setzen
```typescript
[ngClass]="{'selectItem': todoUpdateIndex === i}"
```
In den {} wird durch den Key der zugehörige Value abgefragt, dabei muss der Key -> selectItem in '' gesetzt sein.  
Die Klasse die gesetzt werden soll, wird vor dem : gestellt.  
Nach dem : wird die Bedingung gesetzt. Wird diese mit true zurückgegeben, wird die neue class für das Element gesetzt.

#### Elemente anklicken und Events aufrufen
```typescript
 <span (click)="editTodo(i)">
 ```
 Es ist möglich auf jedem Element ein click-Event zu abonnieren.  
 Dazu muss (click) gesetzt sein und dahinter die gewünschte Funktion die aufgerufen werden soll in "" gesetzt sein.

 #### Structural Directives
 - *-Anweisungen (https://angular.io/guide/structural-directives) 
 - Manipulieren die Struktur (DOM)

 - Beispiel  
    If Anweisungen auf Basis des ViewModels
    ```typescript
    <div *ngIf="!isEditMode">
    ```
    Durch *ngIf können Abfragen gebaut werden, das Element in dem die Abfrage ausgeführt wird, kann dann entsprechend handeln.  
    In diesem Fall wird das div nur angezeigt, wenn isEditMode, false ist.

 #### Zugriff auf Elemente
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

#### Arguments/Parameter
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

#### Dependency Injection
- Übernimmt die Instanzierung von Klassen automatisch
- https://angular.io/guide/dependency-injection

#### Directiven
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

#### String Templates
```typescript
this.inputElement.style.width = `${width}px`;
```
oder
```typescript
this.inputElement.style.width = width + "px";
```
Ermöglicht das Einfügen von Variablen direkt in einem String 