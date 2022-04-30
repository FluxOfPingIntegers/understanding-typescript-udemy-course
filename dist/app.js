"use strict";
class ProjectInput {
    constructor(args, temp = args.temp, host = args.host) {
        const tempEl = document.getElementById(temp);
        const hostEl = document.getElementById(host);
        if ((tempEl instanceof HTMLTemplateElement) && hostEl instanceof HTMLDivElement) {
            this.templateElement = tempEl;
            this.hostElement = hostEl;
        }
        else {
            throw new Error(`ProjectInput - template or host element not found! temp = ${temp}, host = ${host}`);
        }
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