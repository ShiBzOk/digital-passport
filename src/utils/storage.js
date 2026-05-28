export function getStampedCountries() {
  var stamped = localStorage.getItem("stampedCountries");
  if (stamped == null) return []; 
  return JSON.parse(stamped);
}

export function getWishlistCountries() {
  var wishlist = localStorage.getItem("wishlistCountries");
  if (wishlist == null) return []; 
  return JSON.parse(wishlist);
}

export function saveStampedCountries(array) {
  localStorage.setItem("stampedCountries", JSON.stringify(array));
}

export function saveWishlistCountries(array) {
  localStorage.setItem("wishlistCountries", JSON.stringify(array));
}