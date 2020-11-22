import styled from 'styled-components';

export const InfoPrecisamMare = styled.div`
    border: solid;
    border-width: 0px 1px 0px 0px;
    padding: 4px 18px 0px 18px;
    justify-content: center;
    width: 50%;

    span{
      margin-left: 15%;
      color: #333333;
      font-size: 25px;
      fill: #333333;
    }

    ul{
      margin-top: 30px;
      li{
        font-size: 20px;
        list-style-type: none;
        text-align: center;

          h2{
            text-align:left;
            padding: 10px 0px 0px 30px;
            margin-left: 30%;
            font-size: 20px;
          }
        }
    }

`;

export const Box = styled.div`
  margin-top: 30px;
  background:rgb(124, 181, 236);
  width: 100%;
  color:#fff;
  font-size: 16px;
  padding: 3px 12px 3px 5px;
  height: 140px;

    span{
    color:#fff;
    font-size: 15px;
    margin-left: 0px;
    }

    p{
    margin-top: 60px;
    font-size: 30px;
    float:right;
    }
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  margin-top: 20px;
  margin-left:20px;
  margin-right:20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow-x: auto;
  display:flex;
  width: 50%;
}
`;
