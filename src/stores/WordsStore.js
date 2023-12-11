import { makeAutoObservable } from "mobx";
import { getAllWords, updateWord, addNewWord, deleteWord } from "../api/requests";

class WordStore {
    words = [];
    isLoading = false;
    error = null;

    constructor() {
        makeAutoObservable(this);
    }

    load() {
        this.isLoading = true;
        this.error = null;
        getAllWords()
            .then((response) => {
                this.words = response;
            })
            .catch(err => {
                this.error = err;
            })
            .finally(() => this.isLoading = false)
    }

    update(newWords, editedWord) {
        this.words = newWords;
        this.isLoading = true;
        this.error = null;
        updateWord(editedWord)
            .catch(err => {
                this.error = err;
            })
            .finally(() => this.isLoading = false)
    }

    add(newWord) {
        this.isLoading = true;
        this.error = null;
        addNewWord(newWord)
            .then(response => {
                if (response.status !== 'Error')
                    this.words.unshift(response);
                else alert(JSON.stringify(response.errors));
            })
            .catch(err => {
                this.error = err;
            })
            .finally(() => this.isLoading = false)
    }

    delete(id) {
        if (id) {
            this.isLoading = true;
            this.error = null;
            deleteWord(id)
                .then(() => {
                    this.words.splice(this.words.indexOf(this.words.find((el) => el.id === id)), 1);
                })
                .catch(err => {
                    this.error = err;
                })
                .finally(() => this.isLoading = false)
        }
    }
}

export default WordStore;
