// events (publish subscribe) pattern
const eventHandler = {
  events: {},
  subscribe(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  remove(eventName, fn) {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i += 1) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  invoke(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  },
};

const CORRECT_MON_CLICKED = 'OnCorrectMonClicked';
const WRONG_MON_CLICKED = 'OnWrongMonClicked';

export { eventHandler, CORRECT_MON_CLICKED, WRONG_MON_CLICKED };
