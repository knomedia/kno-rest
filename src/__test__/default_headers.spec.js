import headers from '../default_headers'

describe('default_headers', function() {
  it('uses given token method', function() {
    let tokenFunc = ()=> 'token'
    expect(headers(tokenFunc)['X-CSRF-Token']).to.eq('token')
  });
});
