export function copy(text) {
  const area = document.createElement('textarea');

  area.style.cssText = 'opacity:0; position:fixed; width:1px; height:1px; top:0; left:0;';
  area.value = text;

  document.body.appendChild(area);

  area.focus();
  area.select();

  document.execCommand('copy');

  area.remove();
}
