import styled from "@emotion/styled"
import React, { FC } from "react"
import githubIcon from "../assets/icons/github.svg"
import { githubLink } from "../styles/constants"

const Container = styled.div`
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`

const Text = styled.span`
  font-size: 0.6em;
  margin-bottom: 0.25rem;
  display: block;
`

const Github: FC = () => {
  return (
    <Container>
      <Text>Nápad nebo něco špatně? Pošli MR! 👇</Text>
      <a href={githubLink} target="_blank" rel="noreferrer">
        <img src={githubIcon} width="30" height="30" alt="Github" />
      </a>
    </Container>
  )
}

export default Github
