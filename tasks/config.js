module.exports = {
  dest: 'dist',
  sass: {
    src: 'src/css/**/*.scss',
    dest: 'dist/css'
  },
  browserify: [
    {
      entries: 'src/js/main.js',
      outFile: 'main.js'
    }
  ]
}