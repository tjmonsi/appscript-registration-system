function processVisitorRegistration (data) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getOrCreateSheet(spreadsheet, sheets.visitorAttendance(), 4);
  var visitors = getOrCreateSheet(spreadsheet, sheets.visitors());
  var visitorObj = search(visitors, 0, data.email);
  var visitor = visitorObj.row || ['','','','','','','','']
  var visitorIndex = visitorObj.index;
  var rowData = [data.email, data.name, data.industry, data.company, data.contact, data.invited];
  var visitorData = [data.email, data.name, data.industry, data.company, data.contact, null, data.invited, nowString()];

  for (var i = 0; i < visitorData.length; i++) {
    if (visitorData[i]) {
      visitor[i] = visitorData[i];
    }
  }

  insertRow(sheet, rowData, 2);
  insertRow(visitors, visitor, (visitorIndex ? (visitorIndex + 1) : 2));
  return {
    name: data.name,
    recurring: visitorIndex
  };
}
