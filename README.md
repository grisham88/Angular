# Angular Seminar

## Ausführung und Installation mittels Visual Studio Code

### Hilfsfunktionen für VS Code
- https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- https://code.visualstudio.com/docs/getstarted/keybindings
- Aufruf durch F1
    - Wenn > hinterlegt ist, werden Funktionen aufgeführt
    - Ohne > kann man nach Dateien suchen

### Extensions für VS Code
Installationen durchführen für folgende Extensions:
- Angular Language Service
- Debugger for Chrome
- npm
- TSLint
- Material Icon Theme
- XML Tools
- Deutsches Studio falls gewünscht
    - German Language Pack for Visual Studio Code
    - sonst ist Englisch der empfohlene Standard
        - über F1 kann mittels "> Configure Display Language" die Spracheinstellung geändert werden
- Über Datei bzw. File, Automatische Speichern/Autosave aktivieren

### Typescript
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
- Eigene HTML-Elemente
- Annotation @Component definiert das Component  in der app.component.ts
    - In welchen Knotenpunkt soll die Komponente in der index.html eingehängt werden
        - selector
    - Inhaltsherkunft
        - templateUrl
    - Designherkunft der styles für die component
        - styleUrls
- Arten: 
    - Header
    - Nav
    - Content
    - Footer