import styled from "styled-components";
export const StyledContainer = styled.div`
  .container {
    width: 100%;
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  ,
  .item {
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
  }
  ,
  .item-content {
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
  }
  ,
  .item-content {
    cursor: pointer;
    transition: color 0.3s;
  }

  .item-content:hover {
    color: #3498db; /* Warna saat hover */
  }
`;
