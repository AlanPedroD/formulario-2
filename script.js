function saveAsPDF() {
    var doc = new jsPDF();
    var formData = new FormData(document.getElementById("myForm"));
    var formDataEntries = formData.entries();
    var yPos = 10;

    for (var pair of formDataEntries) {
      doc.text(pair[0] + ": " + pair[1], 10, yPos);
      yPos += 10;
    }

    doc.save("formulario.pdf");
  }