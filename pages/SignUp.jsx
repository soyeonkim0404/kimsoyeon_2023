import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '@/public/img/logo.svg';
import Image from 'next/image';

const usernames = ['joe', 'soyeon', 'mark'];

const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};

const UserName = ({ isValid, isLoading, handleChange }) => {
  return (
    <>
      <UserNameStyled>
        <Input placeholder="Username" onChange={handleChange} />
        <div className={`spinner ${isLoading ? 'loading' : ''}`} />
      </UserNameStyled>
      <ValidStyled className={`validation ${!isValid ? 'invalid' : ''}`}>Username already taken</ValidStyled>
    </>
  );
};

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [username, setUsername] = useState('');

  const debouncedUsername = useDebounce(username, 500);

  const handleChange = (e) => {
    setIsLoading(true);
    setUsername(e.target.value);
  };

  useEffect(() => {
    setIsValid(!usernames.some((u) => u === debouncedUsername));
    setIsLoading(false);
  }, [debouncedUsername]);

  return (
    <Card>
      <Image src={logo} alt="logo" />
      <h2>Sign Up</h2>
      <form className="form">
        <UserName isLoading={isLoading} isValid={isValid} handleChange={handleChange} />
        <Input name="password" placeholder="Password" />
        <button disabled={!isValid} className="control" type="button">
          JOIN NOW
        </button>
      </form>
    </Card>
  );
};

const Spin = keyframes`
  100%{
   rotate: 360deg;
  }
`;

const Card = styled.div`
  width: 400px;
  padding: 60px 30px 32px;
  border-radius: 1.25rem;
  background-image: radial-gradient(at 50% 40%, #fff, transparent 80%),
    radial-gradient(at 50% -47%, #ace0f9, transparent 80%), radial-gradient(at 0% 0%, #e8e1ff 0, transparent 32%),
    radial-gradient(at 100% 98%, #fff1eb, transparent), radial-gradient(at 0 97%, #e3ebff, transparent);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: 0.4s;
  box-sizing: border-box;
  h2 {
    font-size: 50px;
    font-weight: normal;
    margin: 0 0 50px;
    color: #212529;
  }
  img {
    width: 260px;
  }
  .form {
    width: 100%;
    margin: 0;
    display: grid;
    input {
      margin-top: 10px;
      &::placeholder {
        color: rgb(255 255 255 / 30%);
      }
    }
    button {
      cursor: pointer;
      width: 100%;
      height: 56px;
      padding: 0 16px;
      background: #228be6;
      color: #f7f7f7;
      border: 0;
      margin-top: 20px;
      text-align: center;
      letter-spacing: 2px;
      border-radius: 6px;
      transition: all 0.375s;
      &:disabled {
        opacity: 0.25;
      }
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  border: 0;
  background: #ffffff;
  color: #212529;
  border-radius: 6px;
  transition: 0.4s;
  box-sizing: border-box;
`;

const UserNameStyled = styled.div`
  position: relative;
  .spinner {
    position: absolute;
    top: 50%;
    right: 10px;
    translate: 0 -39%;
    width: 30px;
    height: 30px;
    visibility: hidden;
    opacity: 0;
    border-radius: 50%;
    border: 3px solid #dee2e6;
    border-top-color: #212529;
    animation: ${Spin} 0.6s infinite linear;
    transition: 0.3s;
    &.loading {
      visibility: visible;
      opacity: 1;
    }
  }
`;
const ValidStyled = styled.div`
  overflow: hidden;
  height: 0;
  color: #f03e3e;
  transition: 0.3s;
  &.invalid {
    margin-top: 10px;
    height: 20px;
    text-align: left;
  }
`;

export default SignUp;
