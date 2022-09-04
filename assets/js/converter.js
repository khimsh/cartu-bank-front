;(() => {
    ;('use strict')

    if (!document.querySelector('.convert-currency')) return

    const form = document.querySelector('.convert-currency')
    const inputOne = form.querySelector('[data-input-one]')
    const inputTwo = form.querySelector('[data-input-two]')
    const selectOne = form.querySelector('[data-select-one]')
    const selectTwo = form.querySelector('[data-select-two]')

    // Exchange rates placeholder data
    const currencies = {
        GEL: {
            buy: 1,
            sell: 1,
        },
        USD: {
            buy: 2.81,
            sell: 2.91,
        },
        GBP: {
            buy: 3.1,
            sell: 3.21,
        },
        EUR: {
            buy: 2.91,
            sell: 3.01,
        },
    }

    // Exchange Mode
    // Buy/Sell
    const exchangeModeBtns = [...document.querySelectorAll('[data-currency]')]
    let activeMode = exchangeModeBtns.filter((btn) => btn.classList.contains('active'))[0].dataset.currency

    exchangeModeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return

            exchangeModeBtns.forEach((btn) => btn.classList.remove('active'))
            btn.classList.add('active')
            activeMode = exchangeModeBtns.filter((btn) => btn.classList.contains('active'))[0].dataset.currency
        })
    })

    inputOne.addEventListener('input', () => {
        const inputOneValue = parseFloat(inputOne.value)
        const selectOneValue = selectOne.value
        const selectTwoValue = selectTwo.value

        calculate(inputOneValue, selectOneValue, selectTwoValue, inputTwo, activeMode)
    })

    selectOne.addEventListener('change', () => {
        const inputOneValue = parseFloat(inputOne.value)
        const selectOneValue = selectOne.value
        const selectTwoValue = selectTwo.value

        calculate(inputOneValue, selectOneValue, selectTwoValue, inputTwo, activeMode)
    })

    inputTwo.addEventListener('input', () => {
        const inputTwoValue = parseFloat(inputTwo.value)
        const selectOneValue = selectOne.value
        const selectTwoValue = selectTwo.value

        calculate(inputTwoValue, selectTwoValue, selectOneValue, inputOne, activeMode)
    })

    selectTwo.addEventListener('change', () => {
        const inputTwoValue = parseFloat(inputTwo.value)
        const selectOneValue = selectOne.value
        const selectTwoValue = selectTwo.value

        calculate(inputTwoValue, selectTwoValue, selectOneValue, inputOne, activeMode)
    })

    // Calculate & Update Inputs
    function calculate(input, inputRate, outputRate, output, activeMode) {
        // თუ ერთიდაიგივე ვალუტაა არჩეული,
        // ინფუთის მნიშვლელობას აბრუნებს აუთფუთში
        if (inputRate === outputRate) {
            output.value = input
            return
        }

        // თუ არჩეული კურსი არ არის GEL
        // ინფუთს ვაკონვერტირებთ ლარში
        const inputOneValueToGEL = convertToGEL(inputRate, currencies[inputRate][activeMode], input)

        // დაკონვერტირებულ მნიშვნელობას შემდეგ ვამრავლებთ არჩეული ვალუტის კურსზე
        const calculatedAmount = (inputOneValueToGEL * currencies[outputRate][activeMode]).toFixed(2)
        console.log(calculatedAmount)
        output.value = calculatedAmount
    }

    // Convert provided amount from any currency to GEL
    function convertToGEL(currencyName, currencyRate, amount) {
        if (currencyName === 'GEL') return amount

        // ლარში კონვერტაციის დროს ინფუთის მნიშვნელობის გამრავლება არჩეულ ვალუტის კურსზე არასწორ შედეგს გვაძლევს.
        // გაყოფა არის სწორი მოქმედება, ჩემი აზრით.
        console.log((amount / currencyRate).toFixed(2))
        return (amount / currencyRate).toFixed(2)
    }
})()
