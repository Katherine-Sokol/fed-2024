const { series, src, dest } = require("gulp");

const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");

function mincss() {
  return src("app/style/style.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("test/style/"));
}

exports.mincss = mincss;
exports.default = series(mincss);
