module.exports = {
  name: 'carousel-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/carousel/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
