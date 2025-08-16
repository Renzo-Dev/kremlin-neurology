/**
 * Функции плавности для анимаций
 */

/**
 * Кубическая функция плавности с замедлением в начале и конце
 * @param {number} t - Время (0-1)
 * @param {number} b - Начальное значение
 * @param {number} c - Изменение значения
 * @param {number} d - Продолжительность
 * @returns {number} - Текущее значение
 */
export const easeInOutCubic = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t * t + b
  t -= 2
  return (c / 2) * (t * t * t + 2) + b
}

/**
 * Быстрая кубическая функция плавности для кнопок
 * @param {number} t - Время (0-1)
 * @param {number} b - Начальное значение
 * @param {number} c - Изменение значения
 * @param {number} d - Продолжительность
 * @returns {number} - Текущее значение
 */
export const easeInOutCubicFast = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t * t + b
  t -= 2
  return (c / 2) * (t * t * t + 2) + b
}

/**
 * Квадратичная функция плавности с замедлением в начале и конце
 * @param {number} t - Время (0-1)
 * @param {number} b - Начальное значение
 * @param {number} c - Изменение значения
 * @param {number} d - Продолжительность
 * @returns {number} - Текущее значение
 */
export const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  return (-c / 2) * ((t - 1) * (t - 3) - 1) + b
}

/**
 * Линейная функция плавности
 * @param {number} t - Время (0-1)
 * @param {number} b - Начальное значение
 * @param {number} c - Изменение значения
 * @param {number} d - Продолжительность
 * @returns {number} - Текущее значение
 */
export const easeLinear = (t, b, c, d) => {
  return (c * t) / d + b
}

/**
 * Быстрая функция плавности для кнопок (упрощенная)
 * @param {number} t - Время (0-1)
 * @param {number} b - Начальное значение
 * @param {number} c - Изменение значения
 * @param {number} d - Продолжительность
 * @returns {number} - Текущее значение
 */
export const easeInOutFast = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) return (c / 2) * t + b
  return (c / 2) * (t - 1) + b + c / 2
}
