'use strict';

var gulp = require('gulp');
var ufocoreTasks = require('ufocore-build');

ufocoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
