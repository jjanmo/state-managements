import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  centering: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0',
  },
  input: {
    width: '400px',
    height: '30px',
    margin: '1rem 0',
  },
  textarea: {
    width: '400px',
    margin: '1rem 0',
  },
};

const Form = () => {
  return (
    <div style={styles.centering}>
      <form style={styles.form}>
        <input style={styles.input} type="text" placeholder="제목을 입력하세요" />
        <textarea style={styles.textarea} placeholder="내용을 입력하세요" rows="10" />
        <input type="submit" value="입력" />
      </form>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Form;
