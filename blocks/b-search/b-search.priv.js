blocks['b-search'] = function(data) {
    return {
        block: 'b-search',
        attrs: { action: '' },
        input: {
            elem: 'input',
            attrs: { value: data.query }
        },
        button: {
            elem: 'button',
            attrs: { value: 'Найти' }
        }
    };
};
