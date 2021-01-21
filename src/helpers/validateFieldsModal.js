export const validateFieldsModal = ( values ) => {
    console.log('values', values);
    let valuesField = Object.values( values );
    valuesField.forEach(field => {
        console.log(field);
    });
}

/**
 * This function should be array receive with all input fields for items on resume
 * more information about Object.defineProperty https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/defineProperty
 * @param {[]} items 
 */
export const converFields = ( items = [] ) => {
    // object with the finally property be return
    let finalyItems = {};
    items.forEach(item => {
        // define estructure for input object 
        Object.defineProperty(finalyItems, item.inputName, {value: '',});
    });
    return finalyItems;
}