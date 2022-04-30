"use strict";
class ProjectInput {
    constructor(args, temp = args.temp, host = args.host) {
        this.templateElement = document.getElementById(temp);
        this.hostElement = document.getElementById(host);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput({ temp: 'project-input', host: 'app' });
//# sourceMappingURL=app.js.map