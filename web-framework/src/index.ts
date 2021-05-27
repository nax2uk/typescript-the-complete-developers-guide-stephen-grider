import { User } from './models/User';
const user = new User({ id: 1 });

user.set({ name: 'Yavuz', age: 22});
user.save();
