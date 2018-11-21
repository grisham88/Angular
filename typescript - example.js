function foo(company) {
    console.log(company.name);
    return company.name;
}
//{} -> Objekt wird mit der Eigenschaft name und city übergeben, value bleibt leer
foo({ name: "DATEV", city: "Nuremberg" });
function foo2(text, nummer) {
    var x = "";
    //Prüfung ob x leer ist wird mit false zurückgegeben wenn x == ""
    if (x) {
    }
    console.log(text);
    console.log(nummer);
    return x || "Kein Wert";
}
foo2(text = "Text", nummer = 4);
