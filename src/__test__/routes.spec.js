import Routes from '../routes'

describe('routes', function() {
  describe('member', function() {
    it('builds member routes with no extra action of enpdoint', function() {
      let r = new Routes('/api/v1/tests')
      let res = r.member(4)
      expect(res).to.eq('/api/v1/tests/4')
    });
    it('builds with action', function() {
      let r = new Routes('/api/v1/tests')
      let res = r.member(4, 'people')
      expect(res).to.eq('/api/v1/tests/4/people')
    });
    it('builds with custom endpoint', function() {
      let r = new Routes('/api/v1/tests')
      let res = r.member(4, undefined, '/api/v1/custom')
      expect(res).to.eq('/api/v1/custom/4')
    });
  });
  describe('collection', function() {
    it('builds collection routes with no extra action of enpdoint', function() {
      let r = new Routes('/api/v1/tests')
      let res = r.collection()
      expect(res).to.eq('/api/v1/tests')
    });
    it('builds with action', function() {
      let r = new Routes('/api/v1/tests')
      let res = r.collection('other')
      expect(res).to.eq('/api/v1/tests/other')
    });
    it('builds with custom endpoint', function() {
      let r = new Routes('/api/v1/tests')
      let res = r.collection('foo', '/api/v1/custom')
      expect(res).to.eq('/api/v1/custom/foo')
    });
  });
});

