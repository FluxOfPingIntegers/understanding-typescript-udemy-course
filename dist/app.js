"use strict";
class ProjectInput {
    constructor(args, temp = args.temp, host = args.host) {
        const tempEl = document.getElementById(temp);
        const hostEl = document.getElementById(host);
        if (tempEl instanceof HTMLTemplateElement && hostEl instanceof HTMLDivElement) {
            this.templateElement = tempEl;
            this.hostElement = hostEl;
        }
        else {
            throw new Error(`ProjectInput - template or host element not found! temp = ${temp}, host = ${host}`);
        }
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput({ temp: 'project-input', host: 'app' });
//# sourceMappingURL=app.js.map