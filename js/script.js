"use strict"

function Button(text) {
  this.text = text || 'Hello';
}

Button.prototype = {
  create: function() {
    var self = this;
    this.element = document.createElement('button');
    this.element.innerText = this.text;
    this.element.addEventListener('click', function() {
	alert(self.text + " alert");
    });
    document.body.appendChild(this.element);
  }
}

var btn1 = new Button();
btn1.create();

var btn2 = new Button('Siemano');
btn2.create();
