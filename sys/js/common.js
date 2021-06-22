var baseUrl = "http://localhost:8080/medical/";

//var baseUrl = "http://49.232.83.75/medical/"
const userId = window.localStorage.getItem("userId");
const userName = window.localStorage.getItem("name");
const userRole = window.localStorage.getItem("role");
function help(){
    alert("需要帮助，请联系管理员。官方微信 zxy915286304");
}
function exportTemplate(id){
    var url = "export/exportFile";
    if(id == "2"){
        url = "export/exportFile2";
    }
    if(id == "3"){
        url = "export/exportFile3";
    }
    if(id == "4"){
        url = "export/exportFile4";
    }
    // alert (url);
    // return;
    window.location.href=baseUrl+url;
}