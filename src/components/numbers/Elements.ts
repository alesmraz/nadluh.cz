import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

export const Col = styled.div`
  flex: 1;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (max-width: 745px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`

export const Year = styled.div`
  flex: 1;
`

export const Item = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
  border-bottom: 1px solid #03a9f4;
`

export const ItemTop = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

export const Title = styled.h4`
  text-align: center;
`

type ValueProps = { color: string }

export const Value = styled.span<ValueProps>`
  color: ${(props) => props.color};
`
