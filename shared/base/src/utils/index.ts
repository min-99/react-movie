/* eslint-disable valid-typeof */
/**
 * 유효기간이 있는 세션 아이템 가져오기
 * @param key
 * @returns
 */
export const getSessionItem = (key: string): string | null => {
  const stringValue = window.sessionStorage.getItem(key);
  if (stringValue !== null) {
    const value = JSON.parse(stringValue);
    const expirationDate = new Date(value.expirationDate);
    if (expirationDate > new Date()) {
      return value.value;
    } else {
      window.sessionStorage.removeItem(key);
    }
  }
  return null;
};
/**
 * 유효기간이 있는 session item 저장
 * @param key
 * @param value
 * @param expirationMin
 */
export const setSessionItem = (
  key: string,
  value: string,
  expirationMin: number = 1,
) => {
  const expirationDate = new Date(new Date().getTime() + 60000 * expirationMin);
  const newValue = {
    value,
    expirationDate: expirationDate.toISOString(),
  };
  window.sessionStorage.setItem(key, JSON.stringify(newValue));
};

export const isServer = () =>
  typeof window === 'undefined' || typeof window === undefined;

export const isClient = () => !isServer();
