var blocks = {};

exports.PRIV = function(data) {
    data.query = data.url && data.url.query && data.url.query.text || '';
    return blocks['b-page'](data);
}

blocks['b-page'] = function(data) {

    return {
        block: 'b-page',
        title: 'Simple Yandex SERP example',
        head: [
            { elem: 'css', url: 'serp.css'},
            { elem: 'css', url: 'serp.ie.css', ie: 'lt IE 8' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', url: 'serp.js' }
        ],
        content: {
            block: 'b-layout',
            content: [
                blocks['b-search'](data),
                blocks['b-serp-list'](data)
            ]
        }
    };

};
