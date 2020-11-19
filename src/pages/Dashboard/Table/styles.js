import styled from 'styled-components';

export const Title = styled.h1`
 font-family: 'Roboto', sans-serif;
 font-size:18px;
 color: #283333;
  padding: 20px 0px 20px 20px;
  `;

export const TableContainer = styled.div`
  background: #fff;
  border-radius: 15px;
  margin-top: -70px;
  margin-left:20px;
  margin-right:20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position:relative;

  table {
    width: 100%;
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
      padding: 0px 15px 0px 25px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      border: thin solid #e8dcdc;
      border-width: 0px 0px 2px 0px;
    }

    td{
      color: black;
      border: 0;
      font-weight: normal;
      padding: 0px 15px 0px 25px;
      text-align: left;
      font-size: 16px;
      line-height: 30px;
      border: thin solid #e8dcdc;
      border-width: 0px 0px 2px 0px;
    }


}
`;


