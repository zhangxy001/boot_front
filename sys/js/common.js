var baseUrl = "http://localhost:8080/medical/";

//var baseUrl = "http://49.232.83.75/medical/"
function help(){
    alert("需要帮助，请联系管理员。官方微信 zxy915286304");
}
function exportTemplate(){
    window.location.href=baseUrl+"export/exportFile";
}