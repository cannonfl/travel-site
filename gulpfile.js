const gulp = require('gulp');
const watch = require('gulp-watch')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssSimpleVars = require('postcss-simple-vars')
const cssNested = require('postcss-nested')
const cssImport = require('postcss-import')
gulp.task('default', function() {
  console.log('Hooray!!!')
})

gulp.task('html', function() {
  console.log('html')
})

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssSimpleVars, cssNested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
})

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html')
  })
})

gulp.task('watch', function() {
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles')
  })
})
