var gulp = require("gulp"),
	sass = require("gulp-sass"),
	cleanCSS = require("gulp-clean-css");
rename = require("gulp-rename");

var fileName = "template.user.css";

var paths = {
	dest: ".",
	css: "./*.css",
	scss: "scss/**/*.scss"
};

function style() {
	return gulp
		.src(paths.scss)
		.pipe(sass({ outputStyle: "nested", precision: 10 }))
		.on("error", sass.logError)
		.pipe(rename(fileName))
		.pipe(gulp.dest(paths.dest));
}

function watch() {
	gulp.watch(paths.scss, style);
}

exports.watch = watch;
exports.style = style;

var build = gulp.parallel(style, watch);

gulp.task("default", build);
