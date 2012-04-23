blocks['b-serp-list'] = function(data) {
    var docs = data.docs || [];

    return {
        block: 'b-serp-list',
        content: data.query ?
            [
                { elem: 'title', content: 'Найдено ' + docs.length + ' документов' },
                docs.map(function(doc, i) {
                    doc.number = i + 1;
                    return blocks['b-serp-item'](data, doc);
                })
            ] :
            { elem: 'empty', content: 'Задан пустой поисковый запрос.' }
    };
};
