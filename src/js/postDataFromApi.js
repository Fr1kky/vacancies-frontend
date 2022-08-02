 export async function  postDataFromAPI(){
    const object = {'salary_starts_from': 4000 };
    const request = new Request('http://127.0.0.1:5000/get_rank', {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
            'Content-Type': 'application/json'
          }
    });
    const response = await fetch(request);
    if (response.ok) {
        const responseText = await response.json();
        return responseText.rank;
    } else {
        return `HTTP error: ${response.status}`;
    }
}

// export {postDataFromAPI};