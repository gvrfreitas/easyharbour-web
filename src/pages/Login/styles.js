import styled from 'styled-components';

export const LoginDiv = styled.div`
@media(min-width: 700px){
  width:100%;
  height:100%;
  background: url("https://media-manager.noticiasaominuto.com/1920/naom_5d00b60f6cd34.jpg")
   no-repeat;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -o-background-size: 100% 100%;
  background-size: 100% 100%;

  display:flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

`;

export const LoginContainer = styled.div`
  width: 350px;
  height: 350px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;

  h1{
    font-size: 25px;
    margin-top: 10px;
  }

  input{
      margin-top: 100px;
      width: 80%;
      height: 30px;
      padding: 5px;
      border-radius: 5px;

      &:focus{
        border-color: #4747ff;
      }
  }
`;




