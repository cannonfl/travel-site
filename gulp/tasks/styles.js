const gulp = require('gulp');
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssSimpleVars = require('postcss-simple-vars')
const cssNested = require('postcss-nested')
const cssImport = require('postcss-import')

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssSimpleVars, cssNested, autoprefixer]))
    .on('error', function(error) {
      console.log(error.toString())
      this.emit('end')
    })
    .pipe(gulp.dest('./app/temp/styles'));
})