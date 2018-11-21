# Angular Seminar

## Ausführung und Installation mittels Visual Studio Code

### Typescript
Installation:  
- https://code.visualstudio.com/docs/languages/typescript
- The easiest way to install TypeScript is through npm, the Node.js Package Manager. If you have npm installed, you can install TypeScript globally (-g) on your computer by:

```html
npm install -g typescript

You can test your install by checking the version or help.

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
Installation:  
Eingabe im Terminal
```html
npm install -g angular-cli

oder

npm install @angular/cli --global
```

Prüfung der Installation:  
Eingabe im Terminal
```html
ng --version
```

## JavaScript
Wie ein Dictionary aufgebaut:
```javascript
var person = { name = "Name"};

person.vorname = "Vorname";
```

Daduch wird direkt die Eigenschaft vorname für das Objekt person erzeugt

ACHTUNG  
Andersherum nicht möglich.

## TypeScript
Kompiliert aus dem Typescript Code neuen ausführbaren Javascript Code.

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
Nun sind alle Eingeschaften eines Typ Strings für die Variable verfügbar.  
Erneute Zuweisung mit einem anderen Typ in Typescript per Standard nicht möglich.  Variable ist jetzt ein String.

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
    //Prüfung ob x leer ist wird mit false zurückgegeben wenn x == ""
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
### Anlage eins Projekts
Eingabe im Terminal:
```html
ng new MyTodoApp

Frage "Would you like to add Angular routing? (y/N)"
-> mit "n" beantworten

Which stylesheet format would you like to use? 
-> mittels Pfeiltaste auswählen
```