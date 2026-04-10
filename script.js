// "Currency Converter App"

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";   // Base API URL


// DOM Elements selection
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const form = document.querySelector("form"); // prevent refresh from form
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const amountInput = document.querySelector(".amount input");
const swap = document.querySelector(".swap-btn");


//  Initialize App
const init = () => {
    populateDropdowns();
    setDefaultFlags();
    updateExchangeRate();
};

// Populate Dropdowns

const populateDropdowns = () => {
    dropdowns.forEach(select => {
        for (let currCode in countryList) {
            const option = document.createElement("option");
            option.innerText = currCode;
            option.value = currCode;

            // Default selections
            if (select.name === "from" && currCode === "USD") {
                option.selected = true;
            } else if (select.name === "to" && currCode === "INR") {
                option.selected = true;
            }

            select.append(option);
        }

        // Update flag when change country
        select.addEventListener("change", (e) => {
            updateFlag(e.target);
        });
    });
};


// 🏳️ Update Flag


const updateFlag = (element) => {
    const currCode = element.value;
    const countryCode = countryList[currCode];

    const img = element.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

// Set flags on initial load (default flags)
const setDefaultFlags = () => {
    updateFlag(fromCurr);
    updateFlag(toCurr);
};


// Fetching API & Convert Currency

const updateExchangeRate = async () => {
    let amount = amountInput.value;

    // Validate amount
    if (amount === "" || amount <= 0) {
        amount = 1;
        amountInput.value = "1";
    }

    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();

    const URL = `${BASE_URL}/${from}.json`;

    try {
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        if (!data[from] || !data[from][to]) {
            throw new Error("Currency not supported");
        }

        const rate = data[from][to];
        const finalAmount = amount * rate;

        // Display result
        msg.innerText = `${amount} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;

    } catch (error) {
        msg.innerText = "Error fetching exchange rate!";
        console.error(error);
    }
};


// Swap Currencies

const swapCurrencies = () => {
    const temp = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = temp;

    setDefaultFlags();
    updateExchangeRate();
};


swap.addEventListener("click", swapCurrencies);

// Event listeners
// Prevent form refresh completely
form.addEventListener("submit", (e) => {
    e.preventDefault();
    updateExchangeRate();
});

// Button click (extra safety)
btn.addEventListener("click", (e) => {
    e.preventDefault();
    updateExchangeRate();
});

// Auto update on change
fromCurr.addEventListener("change", updateExchangeRate);
toCurr.addEventListener("change", updateExchangeRate);

// Press Enter → convert (no refresh)
amountInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        updateExchangeRate();
    }
});

// Initialize when page load

window.addEventListener("load", init);
