const page = document.querySelector('#bwView')
page.addEventListener('dom-ready', () => {
  //webview.openDevTools()
  console.log("loaded: " + page.getURL())
  $('#urlbar').val(page.getURL())
})
/*function switchView(){
  $('#browserWindow_EXT').toggle();
  $('#browserWindow_INT').toggle();
}
*/
