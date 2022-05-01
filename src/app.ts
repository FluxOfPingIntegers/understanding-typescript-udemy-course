// autobind decorator
function autobind( _: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get () {
      const boundFN = originalMethod.bind(this);
      return boundFN;
    }
  };
  return adjDescriptor
}

// ProjectInput Class

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor(args: {temp: string, host: string}, temp = args.temp, host = args.host) {
    const tempEl = document.getElementById(temp)
    const hostEl = document.getElementById(host)

    if ( tempEl instanceof HTMLTemplateElement && hostEl instanceof HTMLDivElement ) {
      this.templateElement = tempEl;
      this.hostElement = hostEl;
    } else {
      throw new Error(`ProjectInput - template or host element not found! temp = ${temp}, host = ${host}`)
    }

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    this.configure();
    this.attach();
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput({temp: 'project-input', host: 'app'});