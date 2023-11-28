import { makeObservable, observable, action } from "mobx";

class WordStore {
    words = [];
    isLoading = false;
    error = null;

    constructor() {
        makeObservable(this, {
            words: observable,
            load: action,
            update: action,
            addWord: action,
            deleteWord: action,
        });
    }

    load() {
        this.isLoading = true;
        fetch('/api/words ')
            .then((response) => {
                if (response.ok) return response.json();
                else throw new Error(response.status);
            })
            .then((response) => {
                this.words = response;
                this.isLoading = false;
            })
            .catch(err => {
                this.error = err;
                this.isLoading = false;
            })
    }

    update(newWords, editedWord) {
        this.words = newWords;
        fetch('/api/words/' + editedWord.id + '/update', {
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
            .catch(err => {
                this.error = err;
            })
    }

    addWord(newWord) {
        fetch('/api/words/add', {
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
            .then(response => {
                this.words.push(response);
            })
            .catch(err => {
                this.error = err;
            })
    }

    deleteWord(id) {
        fetch('/api/words/' + id + '/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                else throw new Error(response.status);
            })
            .then(() => {
                this.words.splice(this.words.indexOf(this.words.find((el) => el.id === id)), 1);
            })
            .catch(err => {
                this.error = err;
            })
    }

}


export default WordStore;
