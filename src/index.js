import "./scss/main.scss";
/////////////// Request to API on btn click
// const btnGDF = document.querySelector('#btnGDF');

// btnGDF.addEventListener('click', async () => {
//     //  fetch('http://127.0.0.1:5000/v1/get_rate')
//     //     .then((response) => {
//     //         return response.json();
//     //     })
//     //     .then((data) => {
//     //         console.log('GET response:');
//     //         console.log(data.rate); 
//     //     });

//     let response = await fetch('http://127.0.0.1:5000/v1/get_rate');
//     let data = await response.json();
//     console.log(data.rate);

//     const textOnPage = document.createElement('p');
//     textOnPage.innerText = data.rate;
//     root.appendChild(textOnPage);
// });


/////////////// Request to API on DOMContentLoad
const root = document.querySelector('.vacancies-wrapper');

document.addEventListener("DOMContentLoaded", async () => {
    let response = await fetch('http://127.0.0.1:5000/v1/get_rate');
    let data = await response.json();
    console.log(data.rate);

    const textOnPage = document.createElement('p');
    textOnPage.innerText = data.rate;
    root.appendChild(textOnPage);
});
