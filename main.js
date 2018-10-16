function onOpen () {
  init();
}

function doGet (event) {
  return HtmlService
    .createTemplateFromFile('templates/index')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, shrink-to-fit=no')
}

function include(filename) {
  return HtmlService
    .createHtmlOutputFromFile(filename)
    .getContent();
}
