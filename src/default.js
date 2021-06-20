import currencyMap from './currencyMap.js';

// default behaviour when only a number or a string is passed as an argument
const currency = (amount, options = {}) => {

    const defaultOptions = {
        currency: 'USD',
        locale: 'en-US',
        style: 'currency',
        // can be 'symbol' => $, 'narrowSymbol' => "$100" instead of "US$100, 'code' => 'USD', 'name' => 'dollars'
        display: 'symbol',
    }

    // Default values for options that were not specified by the user
    const currency = options.currency || defaultOptions.currency;
    const locale = options.locale || defaultOptions.locale;
    const style = options.style || defaultOptions.style;
    const display = options.display || defaultOptions.display;

    const newCurrency = new Intl.NumberFormat(locale, {
        style: style,
        currency: currency,
        currencyDisplay: display,
    });
    const formattedCurrency = newCurrency.format(amount);

    return formattedCurrency;
};

console.log(currency(15000.1251684248, {locale: 'az-Cyrl-AZ', currency: 'AZN'}));
