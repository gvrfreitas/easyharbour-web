import styled from 'styled-components';

export const Container = styled.div`
  background: #345d5a !important;
  padding: 90px 0;

  header{
    padding: 0 80px 50px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav{
      a{
        font-family: Bradley Hand, cursive;
        font-size:20px;
        color:#fff;
        text-decoration: none;

        &:hover{
          cursor: pointer;
        }
      }
    }

    img{
      max-width:120px;
    }
  }
`;
