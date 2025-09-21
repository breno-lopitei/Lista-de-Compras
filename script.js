console.log('Kiwi: script.js carregado ✅');

document.addEventListener('DOMContentLoaded', () => { // espera o DOM (página HTMl) estar pronto
  const form = document.getElementById('formAdd'); // formulário
  const itemInput = document.getElementById('itemInput'); // input de texto
  const lista = document.getElementById('listaDeCompras'); // ul onde os itens serão mostrados

  // Carregar lista salva no Local Storage
  let itens = JSON.parse(localStorage.getItem('listaCompras')) || []; // array para armazenar os itens

  // Função para renderizar a lista na tela
  function renderLista() { // desenha a lista na tela
    lista.innerHTML = ''; // limpa a lista antes de recriar
    itens.forEach((texto, index) => { // para cada item no array
      const li = document.createElement('li'); // cria um elemento li
      li.textContent = texto; // define o texto do li

      // Criar botão de remover
      const botaoRemover = document.createElement('button'); 
      botaoRemover.textContent = '❌';
      botaoRemover.style.marginLeft = '10px';
      botaoRemover.style.cursor = 'pointer';

      // Quando clicar no botão, remove o item pelo índice
      botaoRemover.addEventListener('click', () => {
        itens.splice(index, 1); // remove do array
        salvarLista();
        renderLista(); // redesenha a lista
      });

      li.appendChild(botaoRemover);
      lista.appendChild(li);
    });
  }

  // Função para salvar no Local Storage
  function salvarLista() {
    localStorage.setItem('listaCompras', JSON.stringify(itens));
  }

  // Evento de submit (adicionar item)
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const texto = itemInput.value.trim();
    if (texto === '') {
      itemInput.focus();
      return;
    }

    itens.push(texto); // adiciona no array
    salvarLista();
    renderLista();

    form.reset();
    itemInput.focus();
  });

  // Renderiza lista inicial ao abrir a página
  renderLista();
});
