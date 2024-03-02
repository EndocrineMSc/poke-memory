// events (publish subscribe) pattern
const eventHandler = {
  events: {},
  subscribe(eventName, fn) {
    console.log('subscribe');
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  remove(eventName, fn) {
    console.log('unsubscribe');
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

const MON_CLICKED = 'OnWrongMonClicked';

export { eventHandler, MON_CLICKED };
