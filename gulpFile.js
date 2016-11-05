const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const exec = require('child_process').exec;
const fs = require('fs');

const paths = {
  allSrc: 'src/**',
  allSrcJs: 'src/**/*.js',
  srcPublicDir: 'src/public/*',
  srcPublicDest: 'public/public',
  publicDir: 'public'
};

gulp.task('clean', () => {
  fs.access(paths.publicDir, fs.F_OK, function(err) {
    if (!err) {
      return del(paths.publicDir);
    }
  });
});

gulp.task('build', ['clean'], () => {
  gulp.src(paths.srcPublicDir)
    .pipe(gulp.dest(paths.srcPublicDest));

  return gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.publicDir));
});

gulp.task('main', ['build'], (callback) => {
  exec(`node ${paths.publicDir}`, (error, stdout) => {
    console.log(stdout);
    return callback(error);
  });
});

gulp.task('watch', () => {
  gulp.watch(paths.allSrc, ['main']);

});

gulp.task('default', ['watch', 'main']);
