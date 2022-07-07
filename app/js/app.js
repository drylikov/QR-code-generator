$(document).ready(function () {
  $("select").niceSelect();

  // Валидация формы QR
  $("#qr_form").validate();

  // создание qr кода
  $("#qr_form").on("submit", function (evt) {
    evt.preventDefault();

    const url = $(this).find("#qr_url");
    const size = $(this).find("#qr_size");
    const [width, height] = size.val().split("x");

    $("#qrcode").html("");

    // генерируем qr
    const qrcode = new QRCode(document.getElementById("qrcode"), {
      text: url.val(),
      width: width,
      height: height,
      colorDark: "#000",
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.H,
    });

    $.jGrowl("QR-код создан", { theme: "success" });

    // меняыем ссылку
    // $("#qr_link").val();

    // меняем код
    // $("#qr_code").text();
  });

  // скопировать ссылку
  $("#qr_copy").click(function (evt) {
    evt.preventDefault();

    const $temp = $("<input>");
    $("body").append($temp);

    $temp.val($("#qr_link").val()).select();
    document.execCommand("copy");
    $temp.remove();

    $.jGrowl("Ссылка скопирована", { theme: "success" });
  });

  $("#qr_code").click(function (evt) {
    evt.preventDefault();

    const $temp = $("<input>");
    $("body").append($temp);

    $temp.val($("#qr_code").text()).select();
    document.execCommand("copy");
    $temp.remove();

    $.jGrowl("HTML-код скопирован", { theme: "success" });
  });
});
