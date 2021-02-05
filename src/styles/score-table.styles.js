import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  height: 80px;
  border-radius: 20px;
  background-color: white;
  width: 30%;
  min-width: 4rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-family: 'Barlow Semi Condensed';
`;
export const Text = styled.div`
  text-align: center;
  padding-top: 8px;
  letter-spacing: 2px;
  color: hsl(229, 64%, 46%);
`
export const ScoreNumber = styled.div`
  font-size: 40px;
  position: relative;
`
export const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`
