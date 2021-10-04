const N3 = require('n3');

function loadConfig(store, config) {
    const parser = new N3.Parser();
    return new Promise((resolve, reject) => {
        parser.parse(
            config,
            (error, quad, prefixes) => {
                if (error) {
                    console.log(`error`, error)
                    reject()
                }
              if (quad)
                console.log(quad);
              else
                resolve()
            });
    })
}

function getPages(store) {
    store.match()
}

export {
    loadConfig
}