import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
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
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5em 0;
`
