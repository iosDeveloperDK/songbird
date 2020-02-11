const audioWrong = new Audio('/audio/wrong.mp3')
const audioCorrect = new Audio('/audio/correct.mp3')
const audioVictory = new Audio('/audio/victory.mp3')

export const playError = () => {
  stopPlay()
  audioWrong.play()
}

export const playCorrect = () => {
  stopPlay()
  audioCorrect.play()
}

export const stopPlay = () => {
  audioWrong.pause()
  audioCorrect.pause()
  audioVictory.pause()
  audioWrong.currentTime = 0
  audioCorrect.currentTime = 0
  audioVictory.currentTime = 0
}

export const playVictory = () => {
  stopPlay()
  audioVictory.play()
}

export const calculateTotalValue = length => {
  var minutes = Math.floor(length / 60),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_str.substr(0, 2),
    time = minutes + ':' + seconds

  return time
}

export const calculateCurrentValue = currentTime => {
  var current_hour = parseInt(currentTime / 3600) % 24,
    current_minute = parseInt(currentTime / 60) % 60,
    current_seconds_long = currentTime % 60,
    current_seconds = current_seconds_long.toFixed(),
    current_time =
      (current_minute < 10 ? '0' + current_minute : current_minute) +
      ':' +
      (current_seconds < 10 ? '0' + current_seconds : current_seconds)

  return current_time
}
