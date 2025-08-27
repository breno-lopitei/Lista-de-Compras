document.addEventListener('DOMContentLoaded', () => {
  // Pegamos os elementos do HTML pelos mesmos IDs usados no index.html
  const form = document.getElementById('formAdd');          // O formulário
  const itemInput = document.getElementById('itemInput');   // Campo de texto
  const lista = document.getElementById('listaDeCompras');  // <ul> onde ficam os <li>

  // Ouvimos o evento "submit" do formulário (clica no botão ou pressiona Enter)
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página padrão do form

    // Pegamos o texto digitado e removemos espaços no início/fim
    const texto = itemInput.value.trim();

    // Se o campo estiver vazio, só focamos nele de volta e saímos
    if (texto === '') {
      itemInput.focus();
      return;
    }

    // Criamos um novo <li> para a lista
    const li = document.createElement('li');
    li.textContent = texto;

    // Adicionamos o <li> na <ul>
    lista.appendChild(li);

    // Limpamos o formulário (zera o input) e focamos de novo para o próximo item
    form.reset();
    itemInput.focus();
  });
});