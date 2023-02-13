import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "styles/variables";

export const HeaderDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  grid-gap: 1em;
  border-bottom: 2px solid ${colors.pointColor};
  background: ${colors.blackColor};
`;

export const LogoLink = styled(NavLink)`
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
  width: 210px;
`;

export const LoginBtnStyle = styled.button`
  padding: 10px 10px;
  border: 1px solid ${colors.pointColor};
  border-radius: 5px;
  background: ${colors.pointColor};
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    background: ${colors.blackColor};
    color: ${colors.pointColor};
    cursor: pointer;
  }
`;

export const RegistBtnStyle = styled.button`
  padding: 10px 10px;
  border: 1px solid ${colors.blueColor};
  border-radius: 5px;
  background: ${colors.blueColor};
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;

  &:hover {
    background: ${colors.blackColor};
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
  font-size: 25px;
  color: ${colors.whiteColor};
  margin-right: 20px;
`;

export const MyPageBtn = styled.button`
  padding: 10px 10px;
  border: 1px solid ${colors.midGrayColor};
  border-radius: 5px;
  background: ${colors.midGrayColor};
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;

  &:hover {
    background: ${colors.blackColor};
    color: ${colors.midGrayColor};
    cursor: pointer;
  }
`;

export const LogoutBtn = styled.button`
  padding: 10px 10px;
  border: 1px solid ${colors.redColor};
  border-radius: 5px;
  background: ${colors.redColor};
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.blackColor};
  font-size: 20px;
  font-weight: bolder;

  &:hover {
    background: ${colors.blackColor};
    color: ${colors.redColor};
    cursor: pointer;
  }
`;
