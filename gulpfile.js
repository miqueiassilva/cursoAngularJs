const gulp = require('gulp');

const scripts = require('./scripts');
const styles = require('./styles');
const browserSync = require('browser-sync');
const gulpConcat = require('gulp-concat');
const { doesNotMatch } = require('assert');

gulp.task('css',async function(){
    gulp.src(styles)
    .pipe(gulpConcat('main.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('js',async function(){
    gulp.src(scripts)
    .pipe(gulpConcat('scripts.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.reload({
        stream:true
    }));
});

gulp.task('html',async function(){
    gulp.src('./app/templates/**/*.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('builder',gulp.series(['css','js','html']),function(){
    done();
});

gulp.task('browser-sync',function(){
    browserSync.init(null,{
        open:false,
        server:{
            baseDir:'dist'
        }
    });
});

gulp.task('start',gulp.series(['builder','browser-sync']),function(){    
    gulp.watch(['./app/css/**/*.css'],['css']);
    gulp.watch(['./app/js/**/*.js'],['js']);
    gulp.watch(['./app/templates/**/*.html'],['html']);
});