function doGet(e) {

  var x = HtmlService.createTemplateFromFile("index.html");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;

}
function AddRecord(name, email, phone) {

  var docutment= SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1H2vSj-qYzw-At7YI4tArqTP38rcXhAIh_pS6eO7SWrU/edit#gid=0');
  var webAppSheet = docutment.getSheetByName("RajanSinghRupicardSheet");
  webAppSheet.appendRow([name,email,phone]);
  
}
