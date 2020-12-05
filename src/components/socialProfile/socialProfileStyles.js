import styled from "styled-components";

export default {
  Article: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    margin: 0 auto;
    width: 400px;
    list-style: none;
    border-radius: 4px;
    border: solid 1px;
    background-color: rgba(34, 255, 50, 0.1);
  `,
  Description: styled.div`
    margin-bottom: 25px;
  `,
  Name: styled.p`
    font-size: 1.6em;
    font-family: "Lato";
    color: rgb(18, 34, 54);
    font-weight: bold;
    line-height: 1.778;
    text-align: center;
  `,
  P: styled.p`
    font-size: 14px;
    font-family: "Lato";
    color: rgb(60, 60, 60);
    line-height: 2.286;
    text-align: center;
  `,
  Avatar: styled.img`
    width: 138px;
    height: 138px;
    border-radius: 100%;
  `,
  Label: styled.span`
    font-size: 12px;
    font-family: "Lato";
    color: rgb(118, 134, 150);
    line-height: 2.667;
    text-align: center;
  `,
  Count: styled.span`
    font-size: 14px;
    font-family: "Lato";
    color: rgb(60, 60, 60);
    line-height: 2.286;
    text-align: center;
  `,
  Stats: styled.ul`
    display: flex;
    justify-content: space-between;
    background-color: rgba(34, 129, 212, 0.3);
    width: 100%;
  `,
  Li: styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid 1px grey;
    width: 100%;
    margin: 0;
  `,
};
