const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const shell = require('gulp-shell');
const yaml = require('js-yaml');
const imagemin = require('gulp-imagemin');

gulp.task('lint', () => gulp.src([
  './source/js/**/*.js',
  './scripts/**/*.js'
]).pipe(eslint())
  .pipe(eslint.format()));

gulp.task('lint:stylus', shell.task([
  'npx stylint ./source/css/'
]));

gulp.task('validate:config', cb => {
  const themeConfig = fs.readFileSync(path.join(__dirname, '_config.yml'));

  try {
    yaml.safeLoad(themeConfig);
    return cb();
  } catch (error) {
    return cb(new Error(error));
  }
});

gulp.task('validate:languages', cb => {
  const languagesPath = path.join(__dirname, 'languages');
  const languages = fs.readdirSync(languagesPath);
  const errors = [];

  languages.forEach(lang => {
    const languagePath = path.join(languagesPath, lang);
    try {
      yaml.safeLoad(fs.readFileSync(languagePath), {
        filename: path.relative(__dirname, languagePath)
      });
    } catch (error) {
      errors.push(error);
    }
  });

  return errors.length === 0 ? cb() : cb(errors);
});

// 压缩html文件
gulp.task('minhtml', function (done) {
  return gulp.src('./public/**/*.html')
      .pipe(htmlclean())
      .pipe(htmlmin({
          removeComments: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
      }))
      .pipe(gulp.dest('./public'));
  done();
});

//图片压缩
gulp.task('minimages', function (done) {
  gulp.src('./public/images/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest('./public/images'));
  done();
});

gulp.task('default', gulp.series('lint', 'validate:config', 'validate:languages', 'minimages', 'minhtml'));
