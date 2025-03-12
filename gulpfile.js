const { src, dest, watch, series } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

// Task to process HTML from the root folder
function processHTML() {
    return src('index.html')  
        .pipe(htmlmin({ collapseWhitespace: true })) 
        .pipe(dest('dist'))  
        .pipe(browserSync.stream()); // Reload browser
}

// Initialize Browsersync server
function serve(cb) {
    browserSync.init({
        server: {
            baseDir: "./",  // Serve from project root
        },
        port: 3000
    });
    cb();
}

// Watch for file changes
function watchFiles() {
    watch('index.html', processHTML);
    watch('index.html').on('change', browserSync.reload);
}

// Default task (starts server & watch)
exports.default = series(processHTML, serve, watchFiles);
