let token;

function pluckToken(doc) {
  doc = doc || document
  return doc.querySelector('meta[name="csrf-token"]').content
}

export default function getToken(doc) {
  token = token || pluckToken(doc)
  return token
}
