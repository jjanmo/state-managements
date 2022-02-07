const { makeObservable, observable, action } = mobx;

class Info {
  color = '';
  count = 0;

  constructor() {
    makeObservable({
      color: observable,
      count: observable,
      changeColor: action,
      plus: action,
      minus: action,
    });
  }

  changeColor(color) {
    this.color = color;
  }
  plus() {
    this.count++;
  }
  minus() {
    this.count--;
  }
}

/*

makeObservable
observable
action


*/
