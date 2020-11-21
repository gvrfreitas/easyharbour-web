import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav'

export const Container = styled.div`
  background: #345d5a !important;
  padding: 0px 0px 88px 0px;
  width: 100%;

  header{
    padding: 0 23px 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
      margin-top:10px;
      max-width:80px;
    }
  }
`;

export const NavDiv = styled(Nav)`
       display:flex;
`;

export const Navlink = styled(Nav.Link)`
        font-size:16px;
        color:#fff;
        text-decoration: none;
        margin-left: 20px;

        &:hover{
          cursor: pointer;
          -webkit-transform: scale(1.2);
          -moz-transform: scale(1.2);
          -ms-transform: scale(1.2);
          -o-transform: scale(1.2);
          transform: scale(1.2);
        }

        &:active{
         color: #dad6d6;
        }
`;
