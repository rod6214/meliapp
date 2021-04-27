const productCondition = {
    new: 'Nuevo',
    used: 'Usado'
};


export const formatPrice = (options) => {
    const numberFormat2 = new Intl.NumberFormat(options.lang, options);
    const priceString = numberFormat2.format(options.price);
    const values = priceString.split(',');

    if (options.lang.search('es-') === 0 && options.price >= 1000 && options.price < 10000)
        values[0] = values[0].substr(0, 3) + '.' + values[0].substr(3, 4);

    return { integerPart: values[0], decimalPart: values[1] }
}

export const formatPriceARS = (price) =>  formatPrice({
        style: 'currency',
        currency: 'ARS',
        lang: 'es-AR',
        price});

export const formatProductCondition = (condition) => productCondition[condition];