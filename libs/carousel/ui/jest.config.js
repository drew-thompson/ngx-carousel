module.exports = {
  name: 'carousel-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/carousel/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
