// example taken from the official TS docs at https://www.typescriptlang.org/docs/handbook/functions.html

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// this will blow up - createCardPicker returns a function that is using "this"
// however, since it is a standard JS anonymous function, "this" will only be supplied at the time of invocation
// result: "this" will be "window", which has no property "suits"

// fix using arrow functions

let fixedDeck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            // still failing - we are returning from an anonymous function here, there is no explicit this
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let fixedCardPicker = deck.createCardPicker();
let fixedPickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// real fix - provide a this parameter and specify the type
interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let fixedDeck2: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let fixedCardPicker2 = fixedDeck.createCardPicker();
let fixedPickedCard2 = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// another way to fix - make createCardPicker a declared function instead of anonymous
// this way "this" is known during createCardPicker invocation
class DeckX {
    private suits = ["hearts", "spades", "clubs", "diamonds"];
    private cards =  Array(52);

    createCardPicker () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}