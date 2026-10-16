'use strict';
(() => {
  const data = window.CARDAPIO;
  const title = document.getElementById('selection-title');
  if (!data || !data.dias || !data.cardapio) {
    title.textContent = 'Não foi possível carregar o cardápio.';
    document.getElementById('selection-info').textContent = 'Atualize a página para tentar novamente.';
    return;
  }
  const daySelect = document.getElementById('day');
  const target = document.getElementById('selection');
  const dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const today = new Intl.DateTimeFormat('en-US', {timeZone: 'America/Sao_Paulo', weekday: 'short'}).format(new Date());
  const todayIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(today);
  let meal = 'all';
  for (const day of data.dias) {
    const option = document.createElement('option');
    option.value = day; option.textContent = day;
    daySelect.append(option);
  }
  daySelect.value = dayNames[todayIndex] || data.dias[0];
  const buttons = [];
  for (const name of ['all', ...data.refeicoes]) {
    const button = document.createElement('button');
    button.type = 'button'; button.dataset.meal = name;
    button.textContent = name === 'all' ? 'Dia completo' : name;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {meal = name; render();});
    buttons.push(button);
    document.getElementById('meal-options').append(button);
  }
  function readSelection() {
    const params = new URLSearchParams(location.hash.slice(1));
    const selectedDay = params.get('dia'), selectedMeal = params.get('refeicao');
    if (data.dias.includes(selectedDay)) daySelect.value = selectedDay;
    if (selectedMeal === 'all' || data.refeicoes.includes(selectedMeal)) meal = selectedMeal;
  }
  function render() {
    const day = daySelect.value;
    title.textContent = day;
    document.getElementById('selection-info').textContent = meal === 'all' ? 'As quatro refeições do dia' : meal;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.meal === meal)));
    target.replaceChildren();
    for (const name of data.refeicoes) {
      if (meal !== 'all' && name !== meal) continue;
      const section = document.createElement('section'); section.className = 'meal'; section.dataset.meal = name;
      const heading = document.createElement('h3'); heading.textContent = name + ':';
      const list = document.createElement('ul'); list.className = 'items';
      for (const item of data.cardapio[day][name]) {
        const li = document.createElement('li'); li.dataset.food = item.id;
        li.append(item.nome + ' — ');
        const qty = document.createElement('strong'); qty.textContent = item.quantidade.toLocaleString('pt-BR') + ' ' + item.unidade;
        li.append(qty); list.append(li);
      }
      section.append(heading, list); target.append(section);
    }
    const params = new URLSearchParams({dia: day, refeicao: meal});
    history.replaceState(null, '', '#' + params.toString());
  }
  daySelect.addEventListener('change', render);
  const advance = offset => {
    daySelect.value = data.dias[(data.dias.indexOf(daySelect.value) + offset + data.dias.length) % data.dias.length];
    render();
  };
  document.getElementById('previous').addEventListener('click', () => advance(-1));
  document.getElementById('next').addEventListener('click', () => advance(1));
  document.getElementById('print').addEventListener('click', () => window.print());
  const [year, month, day] = data.atualizado_em.split('-');
  document.getElementById('updated').textContent = 'Cardápio atualizado em ' + day + '/' + month + '/' + year + '.';
  window.addEventListener('hashchange', () => {readSelection(); render();});
  readSelection(); render();
})();
