// 配列の中身が空かどうかを確認するバリデーション
export function arrayNothingValidation(
  elem: string[],
  setFn: (value: string) => void,
  errorText: string
) {
  let check = 0;
  elem.map((item) => {
    check += nothingValidation(item, setFn, errorText);
  });
  return check;
}

//入力の有無を確認するバリデーション
export function nothingValidation(
  elem: string,
  setFn: (value: string) => void,
  errorText: string
) {
  if (!elem || elem.trim().length === 0) {
    setFn(errorText);
    return 1;
  }
  return 0;
}
