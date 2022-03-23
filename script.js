const currencies =
[
    {
        title: "US Dollar",
        sub: "$",
        text: "USD"
    },
    {
        title: "Euro",
        sub: "€",
        text: "EUR"
    },
    {
        title: "Chinese Yuan",
        sub: "¥",
        text: "CNY"
    },
    {
        title: "Thai Baht",
        sub: "฿",
        text: "THB"
    },
    {
        title: "British Pound Sterling",
        sub: "£",
        text: "GBP"
    },
    {
        title: "Ghanaian Cedi",
        sub: "₵",
        text: "GHS"
    },
    {
        title: "Japanese Yen",
        sub: "￥",
        text: "JPY"
    },
    {
        title: "Polish Zloty",
        sub: "zł",
        text: "PLN"
    }
]


function fillCard(card, currency, index) {
    card.querySelector("h2.sub").innerText = currency.sub;
    card.querySelector("p.text").innerText = currency.text;
    card.querySelector("p.title").innerText = currency.title;
}

function addAndFillCards() {
	const cardsElement = document.querySelector("main");
	const firstCard = document.querySelector(".currency");
    fillCard(firstCard, currencies[0], 1);
    for (let i = 1; i < currencies.length; i++) {
        const newCard = firstCard.cloneNode(true);
        fillCard(newCard, currencies[i], i+1);
        cardsElement.appendChild(newCard);
    }
}

window.addEventListener('load', addAndFillCards);