import * as axios from "axios";

export function getFromLocal(value) {
    let arr = [];
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        } else if (!key.startsWith(value)) {
            continue;
        }
        arr.push(JSON.parse(localStorage.getItem(key)))
    }
    return arr;
}


export function storeInLocal(url, value) {
    axios.get(url)
        .then(response => response.data)
        .then(json => json.map(item => localStorage.setItem(`${value}/${item.id}`, JSON.stringify(item))))

}

export function getCurrentPost(url, value, id) {
     return axios.get(url)
        .then(response => response.data)
        .then(json => { 
            if (localStorage.getItem(`${value}/${id}`)) {
                return JSON.parse(localStorage.getItem(`${value}/${id}`));
            } else {
                localStorage.setItem(`${value}/${id}`, JSON.stringify(json))
                return JSON.parse( localStorage.getItem(`${value}/${id}`))
            } })
          
}
