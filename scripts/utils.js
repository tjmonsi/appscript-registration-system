function getOrCreateSheet (spreadsheet, sheet, index) {
  var s = spreadsheet.getSheetByName(sheet.name)
  if (!s) {
    var newIndex = index || 0;
    s = spreadsheet.insertSheet(sheet.name, newIndex);
    insertRow(s, sheet.headers);
  }
  return s;
}

// https://stackoverflow.com/questions/28295056/google-apps-script-appendrow-to-the-top
function insertRow(sheet, rowData, optIndex) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var index = optIndex || 1;
    sheet.insertRowBefore(index).getRange(index, 1, 1, rowData.length).setValues([rowData]).setWrap(true);
    sheet.deleteRow(index + 1);
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }
}

//https://webapps.stackexchange.com/questions/57199/google-spreadsheet-function-to-search-a-sheet-for-string-and-return-value-of-ne
function search(sheet, column, searchString) {
  var values = sheet.getDataRange().getValues();
  var index = findIndex(values, column, searchString);
  if (index) {
    return {
      index: index,
      row: values[index]
    }
  }
  return {
    index: null,
    row: null
  }
}

function findIndex(values, column, searchString) {
  for(var i=0, iLen=values.length; i<iLen; i++) {
    if(values[i][column] == searchString) {
      return i;
    }
  }
}

function nowString () {
  return (new Date().toString());
}
