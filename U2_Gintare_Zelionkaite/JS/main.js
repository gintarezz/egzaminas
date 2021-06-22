let data = [
    { "title": "Java programuotojas", "text": "Jaunesnysis Java programuotojas turi gebėti atlikti nesudėtingų informacinių sistemų, jų sudėtinių dalių kūrimo bei priežiūros darbus Java programavimo kalba, apimant išeities programinio kodo rašymą bei programinės įrangos konstravimą, duomenų saugojimą ir apdorojimą reliacinėse duomenų bazėse, programinės įrangos diegimą, konfigūravimą." },
    { "title": "JavaScript programuotojas", "text": "Būsimasis JavaScript programuotojas mokysis projektuoti ir kurti vartotojo kompiuteriuose, išmaniuosiuose telefonuose, planšetėse ir kt. prieigos įrenginiuose naudojamą programinę įrangą (angl. front-end), parengtą jungtis prie serverių sistemų, duomenų bazių, valdyti programavimo aplinką ir kūrimo procesą." },
    { "title": "PHP programuotojas", "text": "PHP programuotojas gebės projektuoti ir kurti pilnai funkcionuojančias informacines sistemas (angl. full stack), tam panaudojant nesudėtingas duomenų bazes, valdyti programavimo aplinką ir kūrimo procesą." }
]

for (let i = 0; i < data.length; i++) {
    document.getElementsByClassName("jobTitles")[i].innerHTML = data[i].title;
    document.getElementsByClassName("jobText")[i].innerHTML = data[i].text;
}


function onSubmit() {

    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    alert(`${name}, nurodytu el. paštu ${email} naujienlaiškis užsakytas`);

    // return false;
}

