'use strict';

const exec = require('child_process').exec;
const gulp = require('gulp');

gulp.task('test', (done) => {
  exec('node ./node_modules/mocha/bin/mocha --compilers js:babel-core/register ./test', (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    done(error);
  });
});
