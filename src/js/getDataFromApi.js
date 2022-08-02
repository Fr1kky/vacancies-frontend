async function  getDataFromAPI(){
    let response = await fetch('http://127.0.0.1:5000/get_rate');
    let data = await response.json();
    console.log(data.rate);
    console.log(response.ok);
    
    const textOnPage = document.createElement('p');
    textOnPage.innerText = data.rate;
    root.appendChild(textOnPage);
}