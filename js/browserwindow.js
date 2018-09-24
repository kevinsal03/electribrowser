const page = document.querySelector('#bwView')
page.addEventListener('dom-ready', () => {
  //webview.openDevTools()
  console.log("loaded: " + page.getURL())
  $('#urlbar').val(page.getURL())
  $('#pageTitle').html(page.getTitle())
  $('#windowTitle').html(page.getTitle() + " - ElectriBrowser")
})
/*function switchView(){
  $('#browserWindow_EXT').toggle();
  $('#browserWindow_INT').toggle();
}
*/
