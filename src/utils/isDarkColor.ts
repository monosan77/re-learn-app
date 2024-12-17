// RGBから相対輝度を計算して、明るさを判定する関数
export function isDarkColor(hex: string) {
  // if (!hex) return false;

  // HEXをRGBに変換
  const r = parseInt(hex.slice(1, 3), 16); // 赤
  const g = parseInt(hex.slice(3, 5), 16); // 緑
  const b = parseInt(hex.slice(5, 7), 16); // 青

  console.log(r, g, b);
  // 輝度を計算 (簡易的な輝度の計算式)

  const brightness = r * 0.299 + g * 0.587 + b * 0.114;
  if (brightness < 128) {
    const color = "#ffffff";
    return color;
  } else {
    const color = "#000000";
    return color;
  }
}
