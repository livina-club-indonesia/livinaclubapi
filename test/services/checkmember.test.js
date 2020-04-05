const app = require('../../src/app');

describe('\'checkmember\' service', () => {
  it('registered the service', () => {
    const service = app.service('checkmember');
    expect(service).toBeTruthy();
  });
});
