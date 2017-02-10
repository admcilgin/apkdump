const util = require('util')
const ApkReader = require('adbkit-apkreader')

ApkReader.open(process.argv[2])
  .then(function(reader) { return reader.readManifest(); })
  .then(function(manifest) { console.log(util.inspect(manifest, { depth: null })); });
