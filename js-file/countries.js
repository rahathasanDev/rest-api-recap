const loadCountries = () =>{
fetch ('https://restcountries.com/v3.1/all')
 .then(res=>res.json())  
 .then(data =>displayCountries(data))
}
const displayCountries = countries =>{
    // console.log(countries);
    const contriesHTML = countries.map(country =>getCourtryHTML(country));
    // console.log(contriesHTML);
    const container = document.getElementById('courtries');
    container.innerHTML = contriesHTML.join('');
}
const getCourtryHTML = country =>{
    return `
    <div>
    <h2>${country.name.common}</h2>
    <img src ="${country.flags.png}"
    </div>
    `
}
loadCountries();