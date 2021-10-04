const { ComponentsManager } = require('componentsjs')

async function make() {
  const manager = await ComponentsManager.build({
    mainModulePath: __dirname, // Path to your npm package's root
  });
  await manager.configRegistry.register('./config.jsonld');
  const myInstance = await manager.instantiate('urn:my-package:myInstance');
  console.log(`myInstance.name`, myInstance.name)
}


make()