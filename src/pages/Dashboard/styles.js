import styled from 'styled-components';

export const Title = styled.h1`
 font-family: 'Roboto', sans-serif;
 font-size:18px;
 color: #283333;
  padding: 20px 0px 20px 20px;
`;

export const TableContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  margin-top: ${props => props.marginTop};
  margin-left:20px;
  margin-right:20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow-x: auto;
  width: 50%;

  table {
    width: 50%;
    border-spacing: 0 10px;
    padding-bottom: 10px;
    thead{
      tr{
      background: #f1f0f0;
      }
    }

    th {
      color: #444141;
      font-weight: normal;
      padding: 0px 10px 0px 10px;
      text-align: left;
      font-size: 16px;
      line-height: 50px;
      border: thin solid #e8dcdc;
      border-width: 0px 0px 2px 0px;
    }

    td{
      color: black;
      border: 0;
      font-weight: normal;
      padding: 0px 5px 0px 15px;
      text-align: left;
      font-size: 13px;
      line-height: 30px;
      border: thin solid #e8dcdc;
      border-width: 0px 0px 2px 0px;
    }
}
`;


