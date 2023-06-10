// Function to delete all cookies
function deleteAllCookies() {
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf('=');
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
}

// Function to reload the page
function reloadPage() {
  location.reload();
}

// Function to delete cookies and reload the page every 5 minutes
function deleteCookiesAndReload() {
  console.log('running');
  deleteAllCookies();
  reloadPage();
  console.log('---------------------------------');
}
console.log('running successfully');
console.log('random number', Math.random());
// Set an interval to run the deleteCookiesAndReload function every 5 minutes
setInterval(deleteCookiesAndReload, 5 * 60 * 1000);
