var sheets = {
  visitors: function () {
    return {
      name: 'Visitor\'s List',
      headers: ['Email', 'Name', 'Industry', 'Company', 'Contact Number', 'Card Collected', 'Invited by whom', 'Last Attended']
    }
  },
  visitorAttendance: function () {
    return {
      name: Utilities.formatDate(new Date(), "HK", "yyyy-MM-dd") + ' Visitors',
      headers: ['Email', 'Name', 'Industry', 'Company', 'Contact Number', 'Invited by whom', 'Paid']
    }
  }
}
