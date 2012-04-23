({
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
            {
                block: 'b-search',
                attrs: { action: '' },
                input: {
                    elem: 'input',
                    attrs: { value: '' }
                },
                button: {
                    elem: 'button',
                    attrs: { value: 'Найти' }
                }
            },

            {
                block: 'b-serp-list',
                content: [
                    { elem: 'title', content: 'Найдено 100500 документов' },
                    {
                        block: 'b-serp-item',
                        content: [
                            { elem: 'number', content: 1 },
                            { elem: 'title', content: 'Title', url: 'http://www.example.com/' },
                            { elem: 'text', content: 'Text' },
                            { elem: 'url', content: 'http://www.example.com/' }
                        ]
                    },
                    { block: 'b-serp-item', content: [ { elem: 'number', content: 2 }, { elem: 'title', content: 'Title', url: 'http://www.example.com/' }, { elem: 'text', content: 'Text' }, { elem: 'url', content: 'http://www.example.com/' } ] },
                    { block: 'b-serp-item', content: [ { elem: 'number', content: 3 }, { elem: 'title', content: 'Title', url: 'http://www.example.com/' }, { elem: 'text', content: 'Text' }, { elem: 'url', content: 'http://www.example.com/' } ] },
                    { block: 'b-serp-item', content: [ { elem: 'number', content: 4 }, { elem: 'title', content: 'Title', url: 'http://www.example.com/' }, { elem: 'text', content: 'Text' }, { elem: 'url', content: 'http://www.example.com/' } ] },
                    { block: 'b-serp-item', content: [ { elem: 'number', content: 5 }, { elem: 'title', content: 'Title', url: 'http://www.example.com/' }, { elem: 'text', content: 'Text' }, { elem: 'url', content: 'http://www.example.com/' } ] },
                    { block: 'b-serp-item', content: [ { elem: 'number', content: 6 }, { elem: 'title', content: 'Title', url: 'http://www.example.com/' }, { elem: 'text', content: 'Text' }, { elem: 'url', content: 'http://www.example.com/' } ] },
                    { block: 'b-serp-item', content: [ { elem: 'number', content: 7 }, { elem: 'title', content: 'Title', url: 'http://www.example.com/' }, { elem: 'text', content: 'Text' }, { elem: 'url', content: 'http://www.example.com/' } ] },
                    { block: 'b-serp-item', content: [ { elem: 'number', content: 8 }, { elem: 'title', content: 'Title', url: 'http://www.example.com/' }, { elem: 'text', content: 'Text' }, { elem: 'url', content: 'http://www.example.com/' } ] },
                    { block: 'b-serp-item', content: [ { elem: 'number', content: 9 }, { elem: 'title', content: 'Title', url: 'http://www.example.com/' }, { elem: 'text', content: 'Text' }, { elem: 'url', content: 'http://www.example.com/' } ] },
                    { block: 'b-serp-item', content: [ { elem: 'number', content: 10 }, { elem: 'title', content: 'Title', url: 'http://www.example.com/' }, { elem: 'text', content: 'Text' }, { elem: 'url', content: 'http://www.example.com/' } ] }
                ]
            }
        ]
    }

})
