export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5)
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`
}

export function formatPodcastTime(minutes) {
  let hours = minutes / 60;
  let hoursText = " hour "
  if (hours < 1) {
    hours = null
  }

  if (hours > 2) {
    hoursText = " hours "
  }

  const time = hours ? Math.floor(hours) + hoursText + (minutes % 60) + " minutes" : minutes + " minutes"

  let commutes = Math.round(minutes / 50)
  return `${new Array(commutes || 1).fill('🚗').join('')} ${time + " podcast"}`
}
