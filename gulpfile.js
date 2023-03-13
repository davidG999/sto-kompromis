const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const connect = require('gulp-connect');
const liveServer = require("live-server");
const del = require('del');
const fileinclude = require('gulp-file-include');

function clean() {
  return del(['dist']);
}

function html() {
  return src([
    'src/**/*.html',
    // Ignore uk html files
    '!src/header.html',
    '!src/main.html',
    '!src/footer.html',

    // Ignore ru html files
    '!src/ru/header.html',
    '!src/ru/main.html',
    '!src/ru/footer.html',
  ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('dist'))
    .pipe(connect.reload());
}

function normalize() {
  return src('vendor/normalize/normalize.css')
    .pipe(dest('dist/css'));
}

function css() {
  return src('src/scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'))
    .pipe(connect.reload());
}

function img() {
  return src('src/assets/**/*.{png,jpg,gif,svg}')
    .pipe(imagemin())
    .pipe(dest('dist/assets'))
    .pipe(connect.reload());
}

function js() {
  return src('src/js/**/*.js')
    .pipe(dest('dist/js'))
    .pipe(connect.reload());
}

function watchFiles() {
  watch('src/**/*.html', html);
  watch('src/scss/**/*.scss', css);
  watch('src/js/**/*.js', js);
  watch('src/assets/**/*.{png,jpg,svg}', img);
}

function server() {
  const params = {
    port: 8080,
    root: 'dist',
  };
  liveServer.start(params);
}

/* see npm scripts in package.json */
exports.default = series(clean, parallel(html, normalize, css, img, js, watchFiles, server));
exports.build = series(clean, parallel(html, normalize, css, img, js));
exports.clean = clean;
exports.serve = series(clean, parallel(html, normalize, css, img, js), server);