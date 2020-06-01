export default function getToken() {
  return document.querySelector('meta[name="csrf-token"]').content
}
