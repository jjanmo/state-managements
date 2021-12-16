import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.user);

  console.log('>>', user);
  return (
    <div>
      {user.isLoggedIn ? <h1>{user.nickname}</h1> : <h1>로그인을 해주세요</h1>}
      <form>
        <p>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
        </p>
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
};

export default Header;
