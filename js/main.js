/*Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
 */

//richiamare Vue

const { createApp } = Vue;

createApp({

    data() {
        return {

            inputError: false,
            newObj: {

                text: '',
                done: false
            },
            list: [

                {
                    text: "Andare in vacanza",
                    done: false
                },
                {
                    text: "Portare a spasso il cane",
                    done: false
                },
                {
                    text: "Uscire",
                    done: false
                },
                {
                    text: "Fare i compiti",
                    done: true
                },
                {
                    text: "Fare il bucato",
                    done: true
                },
                {
                    text: "Fare la spesa",
                    done: true
                }

            ]
        }
    },
    methods: {

        //aggiungi nuovo compito nella lista
        addObj(){

            //creare una condizione in cui possono essere aggiunti solo oggetti con parole >= a 5 caratteri e non sono ammessi campi vuoti
            if (this.newObj.text !== '' && this.newObj.text.length >= 5) {
                
                const newItem = {
                    text: this.newObj.text,
                    done: this.newObj.done
                };
                this.list.unshift(newItem);

                //svuotare l'elemento inserito
                this.newObj.text = '';
                this.inputError = false;
                
            }else{
                this.inputError = true;
            }
        },
        //rimuovi compito nella lista al click della "x"
        removeObj(index){
            this.list.splice(index, 1)
        }
    }
}).mount('#app')