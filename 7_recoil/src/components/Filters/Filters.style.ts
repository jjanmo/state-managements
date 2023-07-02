import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 1rem auto 0;
  border-radius: 10px;

  display: grid;
  grid-template-columns: repeat(4, 25%);

  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const FilterTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  padding: 1rem 0;
`

export const PriorityContainer = styled.div`
  padding: 0 2rem;
`

export const Button = styled.button<{ active?: boolean }>`
  width: 70%;
  padding: 10px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #0984e3;
  background-color: ${({ active }) => (active ? '#0984e3' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#0984e3')};
  font-size: 16px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;

  & + & {
    margin-top: 10px;
  }

  &:active {
    transform: scale(0.9);
  }
`

export const LeftText = styled.div`
  width: 70%;
  margin: 0 auto;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #b2bec3;

  & em {
    font-weight: bold;
    font-size: 18px;
    color: #2d3436;
  }
  & .percent {
    display: inline-block;
    color: #686de0;
    font-weight: bold;
    font-size: 16px;
    margin-top: 0.5rem;
  }
`

export const PriorityLabel = styled.label<{ color: string; isActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};

  & div {
    width: 100%;
    padding: 8px 0 8px 8px;
    border-radius: 5px;

    color: white;
    background-color: ${({ color }) => color};

    font-size: 18px;
    font-weight: 600;
  }

  input {
    display: none;
    transform: translateY(-1px);
  }

  & + & {
    margin-top: 10px;
  }
`
