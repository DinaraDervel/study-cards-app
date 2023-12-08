import { URLS } from "./constants";

export const getAllWords = () => {
    return fetch(URLS.GET_ALL_WORDS)
        .then((response) => {
            if (response.ok) return response.json();
            else throw new Error(response.status);
        })
}

export const updateWord = (editedWord) => {
    return fetch(URLS.UPDATE_WORD.replace(':id', editedWord.id), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedWord)
    })
        .then((response) => {
            if (response.ok) return response.json();
            else throw new Error(response.status);
        })
}

export const addNewWord = (newWord) => {
    return fetch(URLS.ADD_WORD, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newWord)
    })
        .then((response) => {
            if (response.ok) return response.json();
            else throw new Error(response.status);
        })
}

export const deleteWord = (id) => {
    return fetch(URLS.DELETE_WORD.replace(':id', id), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((response) => {
            if (response.ok) return response.json();
            else throw new Error(response.status);
        })
}