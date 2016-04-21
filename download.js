var ghdownload = require('github-download');

ghdownload({user: 'mimmi20', repo: 'browscap-json-cache-files', ref: 'master'}, 'sources')
  .on('dir', function(dir) {
    console.log(dir);
  })
  .on('file', function(file) {
    console.log(file);
  })
  .on('zip', function(zipUrl) { //only emitted if Github API limit is reached and the zip file is downloaded
    console.log(zipUrl)
  })
  .on('error', function(err) {
    console.error(err);
  })
  .on('end', function() {
    console.log('download finished');
  });
