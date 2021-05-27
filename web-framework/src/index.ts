import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => console.log('change triggered'));
user.on('change', () => console.log('change triggerred'));
user.on('click',() =>console.log('click triggered'));
user.trigger('click');
console.log(user);