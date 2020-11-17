import styled from 'styled-components';

export const Title = styled.h1`
 font-family: Bradley Hand, cursive;
 font-size:30px;
 color: #345d5a;
  text-align: center;
  padding: 10px;
`;

export const TableContainer = styled.div`
  width:65%;
  background: #fff;
  border-radius: 15px;
  margin-top: -70px;
  margin-left:20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position:relative;

  table {
    width: 96%;
    border-spacing: 0 10px;
    margin-left:20px;
    padding-bottom: 10px;

    th {
      color: #888fab;
      font-weight: normal;
      padding: 0px 15px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      border-width: 2px;
      border-color: red;
    }



    td{
      color: #fff;
      font-weight: normal;
      padding: 10px 15px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td:first-child{
        border-radius:5px 0 0 5px;
    }
    td:last-child{
        border-radius:0 5px 5px 0;
    }

  }
`;

export const Tr = styled.tr`

      width:90%;
      background:${props => props.backgroundColor ? props.backgroundColor : "#3d3d"};

tr:last-child{
      margin-bottom: 10px;
    }
`;
