blocks['b-serp-item'] = function(data, doc) {
    return {
        block: 'b-serp-item',
        content: [
            {
                elem: 'number',
                content: doc.number
            },
            {
                elem: 'title',
                content: doc.title,
                url: doc.url
            },
            {
                elem: 'text',
                content: (doc.text || []).map(function(text, i) {
                    return (i > 0 ? '... ' : '') + text;
                })
            },
            {
                elem: 'url',
                content: doc.url
            }
        ]
    };
};
