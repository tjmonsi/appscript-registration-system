function init () {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // var members = getOrCreateSheet(spreadsheet, sheets.members, 0);
  var visitors = getOrCreateSheet(spreadsheet, sheets.visitors());
  // var proxy = getOrCreateSheet(spreadsheet, sheets.proxy, 1);
}
