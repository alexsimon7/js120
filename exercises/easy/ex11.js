//ES6 Class

/*
class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+-${'-'.repeat(this.message.length)}-+`;
  }

  emptyLine() {
    return `| ${' '.repeat(this.message.length)} |`;
  }

  messageLine() {
    return `| ${this.message} |`
  }
}

*/

//Constructors and Prototypes


/*
function Banner(message) {
  this.message = message;
}

Banner.prototype.displayBanner = function() {
  console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
}

Banner.prototype.horizontalRule = function() {
  return `+-${'-'.repeat(this.message.length)}-+`;
}

Banner.prototype.emptyLine = function() {
  return `| ${' '.repeat(this.message.length)} |`;
}

Banner.prototype.messageLine = function() {
  return `| ${this.message} |`;
}
*/

//OLOO

/*
let Banner = {
  init(message) {
    this.message = message;
    return this;
  },

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  },

  horizontalRule() {
    return `+-${'-'.repeat(this.message.length)}-+`;
  },

  emptyLine() {
    return `| ${' '.repeat(this.message.length)} |`;
  },

  messageLine() {
    return `| ${this.message} |`
  },

}
*/

//Factory Function

function banner(message) {
  return {
    message,
    displayBanner() {
      console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
    },
  
    horizontalRule() {
      return `+-${'-'.repeat(this.message.length)}-+`;
    },
  
    emptyLine() {
      return `| ${' '.repeat(this.message.length)} |`;
    },
  
    messageLine() {
      return `| ${this.message} |`
    },
  }
}




let banner1 = banner('To boldly go where no one has gone before.');
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

let banner2 = banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+