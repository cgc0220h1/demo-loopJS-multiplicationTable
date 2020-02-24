function drawTable() {
    let htmlTag = "";
    for (let i = 1; i <= 10; i++) {
        htmlTag += "<tr>";
        for (let j = 1; j <= 10; j++) {
            htmlTag += "<td>" + j + " x " + i + " = " + j * i + "</td>";
        }
        htmlTag += "</tr>"
    }
    document.getElementById('result').innerHTML = htmlTag;
}