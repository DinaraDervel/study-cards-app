import { makeObservable, observable, action } from "mobx";
import { getAllWords, updateWord, addNewWord, deleteWord } from "../api/requests";

class WordStore {
    words = [];
    isLoading = false;
    error = null;

    constructor() {
        makeObservable(this, {
            words: observable,
            isLoading: observable,
            load: action,
            update: action,
            add: action,
            delete: action,
        });
    }

    load() {
        this.isLoading = true;
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
        updateWord(editedWord)
            .catch(err => {
                this.error = err;
            })
    }

    add(newWord) {
        addNewWord(newWord)
            .then(response => {
                if (response.status !== 'Error')
                    this.words.unshift(response);
                else alert(JSON.stringify(response.errors));
            })
            .catch(err => {
                this.error = err;
            })
    }

    delete(id) {
        if (id)
            deleteWord(id)
                .then(() => {
                    this.words.splice(this.words.indexOf(this.words.find((el) => el.id === id)), 1);
                })
                .catch(err => {
                    this.error = err;
                })
    }

}


export default WordStore;
