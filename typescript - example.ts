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