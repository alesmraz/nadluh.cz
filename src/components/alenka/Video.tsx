import styled from "@emotion/styled"
import { FC, useEffect, useRef } from "react"

interface Props {
  speed: number
}

const maxPlaybackRate = 5
const minPlaybackRate = 0.15

const StyledVideo = styled.video`
  width: 100%;
  max-height: 700px;
`

export const Video: FC<Props> = ({ speed }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      const rate = Number(((maxPlaybackRate / 100) * speed).toFixed(1))

      videoRef.current.playbackRate =
        rate < minPlaybackRate ? minPlaybackRate : rate
    }
  }, [speed])

  return (
    <StyledVideo autoPlay loop muted ref={videoRef}>
      <source src={"videos/money-printer-go-brrr.mp4"} type="video/mp4" />
      Your browser does not support the video tag.
    </StyledVideo>
  )
}
