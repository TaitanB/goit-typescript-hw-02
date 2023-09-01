/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IComponent {}

class Component<T extends IComponent> {
  constructor(public props: T) {}
}
interface IPage extends IComponent {
  title: string;
}

class Page extends Component<IPage> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
