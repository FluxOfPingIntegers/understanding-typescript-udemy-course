class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor(args: {temp: string, host: string}, temp = args.temp, host = args.host) {
    this.templateElement = document.getElementById(temp)! as HTMLTemplateElement;
    this.hostElement = document.getElementById(host)! as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput({temp: 'project-input', host: 'app'});