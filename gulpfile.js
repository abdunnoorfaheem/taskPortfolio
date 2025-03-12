const { src, dest, watch, series } = require('gulp');
const htmlmin = require('gulp-htmlmin');

// Task to process HTML from the root folder
function processHTML() {
    return src('index.html')  // Instead of 'src/*.html', we use 'index.html'
        .pipe(htmlmin({ collapseWhitespace: true })) // Minify HTML
        .pipe(dest('dist')); // Save to 'dist' folder
}

// Task to watch index.html for changes
function watchFiles() {
    watch('index.html', processHTML);
}

// Default task (runs processHTML)
exports.default = series(processHTML);

// Watch task
exports.watch = watchFiles;
