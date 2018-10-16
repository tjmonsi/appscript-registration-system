function processBoothVisitorRegistrationSearch (form) {
  var email = form.email;
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (email) {
    var visitors = getOrCreateSheet(spreadsheet, sheets.visitorAttendance());
    var visitor = search(visitors, 0, email).row;

    if (visitor) {
      return {
        email: visitor[0],
        name: visitor[1],
        industry: visitor[2],
        company: visitor[3],
        contact: visitor[4],
        invited: visitor[5]
      }
    }
  }
}


function processBoothVisitorRegistration (data) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getOrCreateSheet(spreadsheet, sheets.visitorAttendance(), 4);
  var visitors = getOrCreateSheet(spreadsheet, sheets.visitors());
  var visitorObj = search(visitors, 0, data.email);
  var visitorAttendanceObj = search(sheet, 0, data.email);
  var visitor = visitorObj.row || ['','','','','','','','']
  var visitorIndex = visitorObj.index;
  var visitorAttendanceIndex = visitorAttendanceObj.index;
  var rowData = [data.email, data.name, data.industry, data.company, data.contact, data.invited, data.paid];
  var visitorData = [data.email, data.name, data.industry, data.company, data.contact, null, data.invited, nowString()];

  for (var i = 0; i < visitorData.length; i++) {
    if (visitorData[i]) {
      visitor[i] = visitorData[i];
    }
  }

  insertRow(sheet, rowData, (visitorAttendanceIndex + 1));
  insertRow(visitors, visitor, (visitorIndex ? (visitorIndex + 1) : 2));
  return {
    name: data.name
  };
}
