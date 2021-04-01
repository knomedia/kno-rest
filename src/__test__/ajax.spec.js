import Ajax from '../ajax'

describe('ajax', function() {
  describe('exec', function() {
    let c;
    let headers = function() {
      return {foo: 'bar'}
    }
    let xhr = function(config) {
      c = config
      return {
        then: function(r) {
          return {
            catch: function(r) {},
          }
        },
      }
    }

    it('uses passed url', function() {
      let a = new Ajax(xhr, headers)
      a.exec('/test', 'POST')
      expect(c.url).to.eq('/test')
    });
    it('uses passed method', function() {
      let a = new Ajax(xhr, headers)
      a.exec('/test', 'POST')
      expect(c.method).to.eq('POST')
    });
    it('uses passed headers function', function() {
      let a = new Ajax(xhr, headers)
      a.exec('/test', 'POST')
      expect(c.headers.foo).to.eq('bar')
    });
    it('sets data key if it exists', function() {
      let a = new Ajax(xhr, headers)
      a.exec('/test', 'POST')
      expect(c.data).to.eq(undefined)
      a.exec('/test', 'POST', {test: {id: 4}})
      expect(c.data.test.id).to.eq(4)
    });
    it('sets data key for GET requests', function() {
      let a = new Ajax(xhr, headers)
      a.exec('/test', 'GET', {from: '4w'})
      expect(c.data.from).to.eq('4w')
    });
  });
});

