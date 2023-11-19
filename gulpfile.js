const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')
const obfuscate = require('gulp-obfuscate')
const uglify = require('gulp-uglify')

function sassComp() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function imagesCompress() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function javaScriptCompress(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(sassComp))
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series(imagesCompress))
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(javaScriptCompress))
}