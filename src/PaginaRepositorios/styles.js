import styled from "styled-components";

export const HeaderSection = styled.header`
  width: 400px;
  height: 130px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0;
  @media (max-width: 430px) {
    width: 300px;
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  padding: 15px 0;
  color: #e5e5e5;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  width: 100%;
`;

export const HeaderInputContainer = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: #ff7a00;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: ease 0.3s;
    &:hover {
      transform: scale(1.05);
      transition: ease 0.3s;
      cursor: pointer;
    }
  }
`;

export const HeaderInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 15px;
  border: none;
  padding: 0 16px;
  color: #444;
  transition: 0.4s ease;
  &:focus {
    outline: none;
    width: 220px;
    transition: 0.4s ease;
  }
`;

export const HeaderSearchButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background: #ff7a00;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: ease 0.3s;
  &:hover {
    transform: scale(1.05);
    transition: ease 0.3s;
    cursor: pointer;
  }
`;
export const ContainerRepositorios = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NumberContainer = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 20px;
    text-align: center;
    color: #444;
    margin: 0;
  }
  h2 {
    font-size: 12px;
    text-align: center;
    color: #777;
    margin: 0;
  }
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.03);
    transition: 0.4s ease;
    border-radius: 10px;
  }
`;
