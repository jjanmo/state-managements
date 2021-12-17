import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as userActions from '../modules/actions/user';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState({
    nickname: '',
    password: '',
  });

  const { nickname, password } = userData;

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!nickname || !password) {
        alert('닉네임 혹은 비밀번호를 입력하세요');
        return;
      }
      dispatch(userActions.loginAsync(userData));
      setUserData({
        nickname: '',
        password: '',
      });
    },
    [nickname, password]
  );

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUserData({
        ...userData,
        [name]: value,
      });
    },
    [userData]
  );

  const onClickLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, []);

  return (
    <div>
      {!user.status ? (
        <h1>로그인을 해주세요</h1>
      ) : user.status === 'loggedIn' ? (
        <h1>현재 유저 : {user.info.nickname}</h1>
      ) : (
        <h1>로그인 중입니다.</h1>
      )}
      {user.status === 'loggedIn' ? (
        <>
          <p>
            <Link to="/form">글쓰기</Link>
          </p>
          <button onClick={onClickLogout}>로그아웃</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <p>
            <input type="text" name="nickname" placeholder="닉네임" value={nickname} onChange={onChange} />
            <input type="password" name="password" placeholder="비밀번호" value={password} onChange={onChange} />
          </p>
          <input type="submit" value="로그인" />
        </form>
      )}
    </div>
  );
};

export default Header;
