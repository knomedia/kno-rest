import getToken from '../get_token'

describe('get_token', function() {
  it('returns content of meta query', function() {
    let doc = {
      querySelector: () => {
        return {
          content: 'test-token'
        }
      }
    }
    expect(getToken(doc)).to.eq('test-token')
  });
  it('uses stored token when present', function() {
    let doc = {
      querySelector: () => {
        return {
          content: 'other-token'
        }
      }
    }
    let two = {
      querySelector: () => {
        return {
          content: 'other-token'
        }
      }
    }
    expect(getToken(doc)).to.eq('test-token')
    expect(getToken(two)).to.eq('test-token')
  });
});

