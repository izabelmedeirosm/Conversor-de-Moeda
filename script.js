const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelectToConvert.value)
    console.log(currencySelectConverted.value)

    const dolarToday = 5.20
    const euroToday = 5.50
    const libraToday = 6.55
    const realToday = 5.55


    if (currencySelectToConvert.value == "real1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "dolar1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "euro1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "libra1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }




    if (currencySelectConverted.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectConverted.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelectConverted.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectConverted.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

}


function changeCurrency() {
    const currencyName1 = document.getElementById("currency-name1")
    const currencyImg1 = document.querySelector(".currency-img1")

    if (currencySelectToConvert.value == "dolar1") {
        currencyName1.innerHTML = "Dólar americano"
        currencyImg1.src = "./assets/dolar.png"
    }
    if (currencySelectToConvert.value == "euro1") {
        currencyName1.innerHTML = "Euro"
        currencyImg1.src = "./assets/euro.png"
    }
    if (currencySelectToConvert.value == "libra1") {
        currencyName1.innerHTML = "Libra esterlina"
        currencyImg1.src = "./assets/libra 1.png"
    }
    if (currencySelectToConvert.value == "real1") {
        currencyName1.innerHTML = "Real brasileiro"
        currencyImg1.src = "./assets/real.png"
    }



    const currencyName2 = document.getElementById("currency-name2")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelectConverted.value == "dolar") {
        currencyName2.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }
    if (currencySelectConverted.value == "euro") {
        currencyName2.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if (currencySelectConverted.value == "libra") {
        currencyName2.innerHTML = "Libra esterlina"
        currencyImg.src = "./assets/libra 1.png"
    }
    if (currencySelectConverted.value == "real") {
        currencyName2.innerHTML = "Real brasileiro"
        currencyImg.src = "./assets/real.png"
    }

    convertValues()


}
currencySelectToConvert.addEventListener("change", changeCurrency)
currencySelectConverted.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
