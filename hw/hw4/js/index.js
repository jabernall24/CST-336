
$.ajax({
    method: "GET",
    url: "api/languages.php",
    dataType: "json",
     success: function(data, status) {
         data.forEach(function(language) {
            $("[name=languageFilter]").append("<option> " + language + " </option>");
         })
    }
}); //ajax 


$("#detectButton").on('click', function() {
    let encoded = encodeURI($("#textToDetect").val());
    $.ajax({
        method: "GET",
        url: "api/lanDetectionAPI.php",
        dataType: "json",
            data: { 
                "message": encoded
            },
         success: function(data, status) {
            if(data.isReliable) {
                $("#language").html(data['language']);
                retrieveData("insert", data['language'], data['code'], data['confidence'], decodeURI(data['text']), "Recent");
            }else {
                $("#language").html("Not confident enough to predict");
            }
        }
    }); //ajax 
})

retrieveData('retrieve', null, null, null, null, "Recent");

function retrieveData(action, lan, code, con, text, order) {
    $.ajax({
        method: "GET",
        url: "api/languageHistory.php",
        dataType: "json",
            data: { 
                "action": action,
                "language": lan,
                "languageAbbr": code,
                "confidence": con,
                "text": text,
                "order": order
            },
         success: function(data, status) {
             $("#history").html("");
             let count = 1;
            data.forEach(function(entry) {
                $("#history").append("<tr> <td> " + count + " </td>"
                + "<td> " + entry['text'] + " </td>"
                + "<td> " + entry['language'] + " (" + entry['languageAbbr'] + ") </td>"
                + "<td> " + entry['confidence'] + " </td>"
                + " </tr>")
                count++;
            })
        }
    }); //ajax 
}

$("[name=languageFilter]").on('change', function() {
    retrieveData("retrieve", null, null, null, null, $(this).val())
})