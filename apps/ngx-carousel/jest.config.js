module.exports = {
  name: 'ngx-carousel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngx-carousel',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
