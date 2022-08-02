import "./scss/main.scss";
import {postDataFromAPI} from './js/postDataFromApi'

/////////////// Request to API on DOMContentLoad
document.addEventListener("DOMContentLoaded",  () => {
    postDataFromAPI();
    postDataFromAPI().then(data => {
        console.log(data);
    })
});

