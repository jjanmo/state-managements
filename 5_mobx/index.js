const { observable, autorun, reaction } = require('mobx');

const state = observable({
  user: {
    id: '',
    name: '',
    email: '',
  },
  // posts: [
  //   {
  //     id: 1,
  //     author: 'michael',
  //     title: 'Hello World',
  //     description: 'This is Redux Hello World',
  //   },
  // ],
  posts: null,
});
let postID = 1;

console.log(state);

// 로그인 상황
const user = {
  id: 1,
  name: 'jjanmo',
  email: 'jjanmo07@hanmail.net',
};
const login = (data) => {
  const { id, name, email } = data;
  state.user.id = id;
  state.user.name = name;
  state.user.email = email;
};
login(user);

// autorun : state가 변화하면 콜백이 자동으로 실행된다.
autorun(() => {
  console.log('loggedIn : ', state.user.id, state.user.name, state.user.email);
});

const post = {
  id: postID++,
  author: state.user.name,
  title: 'Hello World',
  description: 'This is New MobX World',
};

const addPost = (post) => {
  // state.posts.push(post);
  state.posts = post;
};

addPost(post);

// 첫번째 콜백 인자가 변화할때만 실행된다.
reaction(
  () => {
    return state.posts;
  },
  () => {
    console.log('reaction', state.posts);
  }
);

// autorun(() => {
//   console.log('add Post : ', state.posts);
// });
