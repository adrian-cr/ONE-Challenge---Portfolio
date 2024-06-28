document.write("\
  <h1>ONE εNςrγρTεR</h1>\
  <section class=\"encrypter\">\
    <div class=\"input\">\
      <h3> Enter your text:</h3>\
      <div class=\"text-input\">\
        <input onfocusout=\"document.querySelector('.message').style='display:none;'\" onclick=\"reset();checkInputLength();\" onkeyup=\"checkInputLength();\" type=\"text\" placeholder=\"Enter text...\" required>\
        <button id=\"desk-erase\" onclick=\"reset(eraser=true);\"><i class=\"fa fa-eraser\"></i></button>\
        <button id=\"mobile-erase\" onclick=\"reset(eraser=true);\"><i class=\"fa fa-eraser\"></i>Erase</button>\
      </div>\
      <p class=\"message\"></p>\
      <div class=\"input-actions\">\
        <button onclick=\"transformText(encrypt=true);\" disabled>Encrypt</button>\
        <button onclick=\"transformText(encrypt=false);\" disabled>Decrypt</button>\
      </div>\
    </div>\
    <div class=\"output\">\
      <div class=\"text-output\">\
        <h3></h3>\
        <p></p>\
      </div>\
      <button onclick=\"copyOutput()\" disabled></button>\
    </div>\
  </section>\
  <script src=\"Encrypter/encrypterApp.js\"></script>\
");
