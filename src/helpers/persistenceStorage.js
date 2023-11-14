export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    console.log('Ошибка получения данных из локалстораджа')
    return null
  }
}

export const setItem = (key, data) => {
  try {
    return localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.log('Ошибка отправки данных в локалсторадж')
  }
}
