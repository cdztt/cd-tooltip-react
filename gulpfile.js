/* eslint-disable @typescript-eslint/no-var-requires */
const { src, dest, watch } = require('gulp');
const { TrimComments } = require('@cdztt/gulp-trimcomments');

function trimCommentsInJson() {
  return src('tsconfig.json').pipe(new TrimComments()).pipe(dest('./'));
}

const watched = ['src/**/*', '!src/**/*.tsx'];

function copyAssets() {
  return src(watched).pipe(dest('js/'));
}

exports.trimCommentsInJson = trimCommentsInJson;
exports.default = () => {
  watch(watched, { ignoreInitial: false }, copyAssets);
};
