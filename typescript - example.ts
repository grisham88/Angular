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
foo({ name: "DATEV", city: "Nuremberg"});

function foo2(text: string, nummer: number): string | number
{
    var x = "";
    //Prüfung ob x leer ist wird mit false zurückgegeben wenn x == ""
    if(x){

    }
    console.log(text);
    console.log(nummer);
    return x || "Kein Wert";
}

foo2( text = "Text", nummer = 4);