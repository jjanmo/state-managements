const { createStore } = require('redux');

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';

const login = (user) => ({
  type: LOGIN,
  payload: user,
});
const logout = () => ({ type: LOGOUT });
const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});
const deletePost = ({ postID }) => ({
  type: DELETE_POST,
  payload: postID,
});
const updatePost = ({ postID, data }) => ({
  type: UPDATE_POST,
  payload: {
    id: postID,
    data,
  },
});

/*
user data example
user = {
  name : ~~
  isAdmin : ~~
}
*/
const initialState = {
  user: null,
  posts: [
    {
      id: 1,
      author: 'michael',
      title: 'Hello World',
      description: 'This is Redux Hello World',
    },
  ],
};

let postID = 1;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }
    case ADD_POST: {
      postID++;
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: postID,
            ...action.payload,
          },
        ],
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    }
    case UPDATE_POST: {
      return {
        ...state,
        posts: state.posts.map((post) => (post.id === action.payload.id ? { ...post, ...action.payload.data } : post)),
      };
    }
  }
};

const store = createStore(reducer);

// 아래 코드는 실제 화면 로직에서 일어나는 코드이다.
// → 화면은 구현하지 않고 코드로만 생각해보자.

store.dispatch(
  login({
    name: 'jjanmo',
    isAdmin: false,
  })
);
console.log('✅ After login : ', store.getState());

store.dispatch(
  addPost({
    author: 'jjanmo',
    title: 'What is redux??',
    description: 'Now we can make store using vanilla redux!',
  })
);
console.log('✅ After add post : ', store.getState());

store.dispatch(
  addPost({
    author: 'jjanmo',
    title: '생각 정리 스피치란?',
    description: '생각을 정리하는 방법을 배우자!',
  })
);
console.log('✅ After add post : ', store.getState());

store.dispatch(
  updatePost({
    postID: 2,
    data: {
      title: '생각 정리 스피치 배우기',
      description: '나에게 나무 벨 시간이 주어진다면, 도끼를 가는데 80%를 쓰겠어! ',
    },
  })
);
console.log('✅ After update post : ', store.getState());

store.dispatch(deletePost({ postID: 3 }));
console.log('✅ After delete post : ', store.getState());

store.dispatch(logout());
console.log('✅ After logout : ', store.getState());

/*
store.subscribe(listener);
→ 화면에 그리는 부분과 연결하는 방법
→ state가 변경되면 구독해놓은 listener가 작동하여서 변경된 state에 따라서 화면을 리랜더링한다.
→ 여기서는 사용하지 않은 이유는 화면보다 데이터의 흐름에 집중한 것!
  react에서 redux를 사용하는 경우 이 부분을 react-redux가 알아서 해주게 된다.
*/
