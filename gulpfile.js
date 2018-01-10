const gulp = require('gulp');
const watch = require('gulp-watch')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssSimpleVars = require('postcss-simple-vars')
const cssNested = require('postcss-nested')
const cssImport = require('postcss-import')
const browserSync = require('browser-sync').create()

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
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  })
  
  watch('./app/index.html', function() {
    browserSync.reload();
  })

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject')
  })
})

gulp.task("cssInject", ['styles'], function () {
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream())
})