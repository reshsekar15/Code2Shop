export function formatMoney(num, c = 2, d = '.', t = ',', sym = '') {
  let n = num;
  const s = n < 0 ? '-' : '';
  const i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c), 10));
  let j = i.length;
  j = j > 3 ? j % 3 : 0;
  return n === 0 ? '-' : s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, `${sym}1${t}`) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
}

export function formatNumDays(Hours, Manpower) {
  const ManHours = Manpower * 8;
  const result = Hours / ManHours;

  if (result < 1) {
    return '<';
  }
  return Math.round(result);
}

export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

export function delay() {
  let timer;
  return (callback, ms) => {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
}
