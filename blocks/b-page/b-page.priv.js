var blocks = {};

exports.PRIV = function(data) {
    return blocks['b-page'](data);
}

blocks['b-page'] = function(data) {

    return {
        block: 'b-page'
    };

};
