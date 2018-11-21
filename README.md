# Angular Seminar

## JavaScript
Wie ein Dictionary aufgebaut:
```javascript
var person = { name = "Name"};

person.vorname = "Vorname";
```

Daduch wird direkt die Eigenschaft vorname für das Objekt person erzeugt

## TypeScript
Kompiliert aus dem Typescript Code neuen ausführbaren Javascript Code.  

ACHTUNG  
Andersherum nicht möglich.

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
function foo(a: string, b: number): string | number
{
    var x = "";
    //Prüfung ob x leer ist wird mit false zurückgegeben wenn x == ""
    if(x){

    }
    return x || "Kein Wert";
}

foo({ a = "Text", b = 4});
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