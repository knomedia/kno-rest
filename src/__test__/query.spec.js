import query from '../query'

describe('query', function() {
  describe('without payload or GET request', function() {
    it('returns url', function() {
      expect(query('/foo')).to.eq('/foo')
      expect(query('/foo', undefined, 'GET')).to.eq('/foo')
      expect(query('/foo', {payload: 'bar'})).to.eq('/foo')
      expect(query('/foo', {payload: 'bar'}, 'PUT')).to.eq('/foo')
    });
  });
  describe('with payload and GET request', function() {
    it('serializes payload into url', function() {
      expect(query('/foo', {payload: 'bar'}, 'GET')).to.eql('/foo?payload=bar')
      expect(query('/foo', {payload: 'bar', other: 'value'}, 'GET')).to.eql('/foo?payload=bar&other=value')
      expect(query('/foo', {q: 'bar', z: 'value'}, 'GET')).to.eql('/foo?q=bar&z=value')
    });
  });
});
