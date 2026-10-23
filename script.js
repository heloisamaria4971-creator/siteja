
const WHATSAPP_NUMERO = "5513997014782";

// Cria links do WhatsApp com mensagens prontas
function criarLinkWhatsApp(mensagem) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

// Configura todos os botões de contato do site
document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const mensagem = link.dataset.message ||
    "Olá! Gostaria de saber mais sobre a criação de sites com a Sitejá.";

  link.href = criarLinkWhatsApp(mensagem);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// Menu para celulares
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );

  menuToggle.textContent = aberto ? "✕" : "☰";
});

// Fecha o menu depois que a pessoa escolhe uma opção
document.querySelectorAll("#nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  });
});

// Formulário: prepara a mensagem com os dados preenchidos
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const servico = document.getElementById("servico").value.trim();
  const detalhes = document.getElementById("detalhes").value.trim();

  if (!nome || !servico) {
    alert("Por favor, preencha seu nome e seu tipo de serviço.");
    return;
  }

  let mensagem =
    `Olá! Meu nome é ${nome}.\n\n` +
    `Trabalho com ${servico} e tenho interesse em criar um site com a Sitejá.\n\n` +
    `Gostaria de saber mais sobre como funciona e como podemos começar.`;

  if (detalhes) {
    mensagem += `\n\nDetalhes sobre meu site:\n${detalhes}`;
  }

  const url = criarLinkWhatsApp(mensagem);

  // Abre o WhatsApp após o envio do formulário
  window.open(url, "_blank", "noopener,noreferrer");
});

// Atualiza o ano do rodapé automaticamente
document.getElementById("year").textContent =
  new Date().getFullYear();
