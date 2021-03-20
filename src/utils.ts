function interpolateColor(
  color1: number[],
  color2: number[],
  factor: number = 3
) {
  var result = color1.slice()
  for (var i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]))
  }
  return result
}

export function interpolateColors(
  color1: string,
  color2: string,
  steps: number
) {
  const stepFactor = 1 / (steps - 1)
  const interpolatedColorArray = []

  const fixedColor1 = color1.match(/\d+/g)?.map(Number)
  const fixedColor2 = color2.match(/\d+/g)?.map(Number)

  for (var i = 0; i < steps; i++) {
    if (fixedColor1 && fixedColor2) {
      interpolatedColorArray.push(
        interpolateColor(fixedColor1, fixedColor2, stepFactor * i)
      )
    }
  }

  return interpolatedColorArray
}
