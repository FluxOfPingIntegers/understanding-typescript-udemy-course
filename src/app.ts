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

  private validateUserInput(inputArr: (string | number)[]): boolean {
    let correct = true;
    for (let val in inputArr) {
      correct = (correct && val.trim().length === 0)
    }
    return correct
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    if (this.validateUserInput([enteredTitle, enteredDescription, +enteredPeople])) {
      return [enteredTitle, enteredDescription, +enteredPeople];
    } else {
      alert('Invalid input, please try again!');
    }
    // if (
    //   enteredTitle.trim().length === 0 ||
    //   enteredDescription.trim().length === 0 ||
    //   enteredPeople.trim().length === 0
    // ) {
    //   alert('Invalid input, please try again!');
    //   return;
    // } else {
    //   return [enteredTitle, enteredDescription, +enteredPeople];
    // }
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      this.clearInputs();
    }
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput({temp: 'project-input', host: 'app'});