const BASE_URL =
    "https://cdn.jsdelivr.net/gh/@fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const dropdowns = document.querySelectorAll(".dropdown select");

for (code in CountryList) {
    console.log(code, CountryList[code]);

}
//for (let select of dropdowns) {

//}