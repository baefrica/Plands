import styled from "styled-components";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import { colors } from "styles/variables";

export const HeaderDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  grid-gap: 1em;
  border-bottom: 2px solid ${colors.pointColor};
  background: ${colors.blackColor};

  span {
    color: ${colors.pointColor};
    margin-left: 20px;
    margin-right: 8px;
=======

export const HeaderDiv = styled.div`
  background: #2c2c2c;
  width: 100%;
  display: flex;
  font-weight: 500;
  font-size: 20px;
  box-sizing: border-box;
  justify-content: space-between;
`;
export const HeaderBtnColumDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 50px;
`;
export const HeaderButtonDiv = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
`;

export const LoginBtnStyle = styled(NavLink)`
  background-color: white;
  width: 40%;
  text-align: center;
  padding: 10px;
  color: black;
  font-size: 20px;
  font-weight: bolder;
  margin: 5px;
  outline: invert;
  border: 5px solid #faff00;
  border-radius: 25px;
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    background: #faff00;
  }
  &.active {
    font-weight: bold;
    position: relative;
  }
`;

export const RegistBtnStyle = styled(NavLink)`
  background-color: white;
  width: 40%;
  text-align: center;
  padding: 10px;
  color: black;
  font-size: 20px;
  font-weight: bolder;
  margin: 5px;
  outline: invert;
  border: 5px solid #41a3fe;
  border-radius: 25px;
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    background: #41a3fe;
  }
  &.active {
    font-weight: bold;
    position: relative;
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
  }
`;

export const LogoLink = styled(NavLink)`
<<<<<<< HEAD
  grid-column: 2;
`;

export const LogoImg = styled.img`
  height: 80px;
  object-fit: cover;
`;

export const HeaderButtonDiv = styled.div`
  grid-column: 24;
  display: flex;
  align-items: center;
  width: 260px;
`;

export const LoginBtnStyle = styled.button`
  padding: 15px;
  border-radius: 5px;
  background: ${colors.pointColor};
  width: 100px;
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    background: #86873a;
    color: ${colors.pointColor};
    cursor: pointer;
  }
`;

export const RegistBtnStyle = styled.button`
  padding: 15px;
  border-radius: 5px;
  background: ${colors.blueColor};
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;

  &:hover {
    background: #4a7296;
    color: ${colors.blueColor};
    cursor: pointer;
  }
`;

export const Loginned = styled.div`
  grid-column: 26;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 570px;
`;

export const LoginMsg = styled.div`
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-size: 18px;
  color: ${colors.whiteColor};
  margin-right: 20px;
`;

export const MyPageBtn = styled.button`
  padding: 15px;
  border-radius: 5px;
  background: ${colors.midGrayColor};
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;

  &:hover {
    background: #757373;
    color: ${colors.midGrayColor};
    cursor: pointer;
  }
`;

export const LogoutBtn = styled.button`
  padding: 15px;
  border-radius: 5px;
  background: ${colors.redColor};
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;

  &:hover {
    background: #8a3d3f;
    color: ${colors.redColor};
    cursor: pointer;
  }
`;
=======
  height: 100%;
`;

export const LogoImg = styled.img`
  height: 90px;
  margin: 15px;
  object-fit: cover;
`;
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
