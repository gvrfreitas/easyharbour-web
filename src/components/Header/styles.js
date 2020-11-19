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
      max-width:120px;
    }
  }
`;

export const NavDiv = styled(Nav)`
       display:flex;
`;

export const Navlink = styled(Nav.Link)`
        font-family: 'Roboto', sans-serif;
        font-size:16px;
        color:#fff;
        text-decoration: none;
        margin-left: 20px;

        &:hover{
          cursor: pointer;
        }

        &.active{
          padding-bottom: 5px;
          border-bottom: 3px solid #fff;
        }
`;
