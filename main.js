document.addEventListener('DOMContentLoaded', function () {

    function verificarStatusLoja() {
        const agora = new Date();
        const hora = agora.getHours();
        const diaSemana = agora.getDay(); // 0 = Domingo, 6 = Sábado

        const elementoStatus = document.getElementById('status-loja');

        // Regra: Aberto das 09h às 19h, exceto domingo
        const aberto = (hora >= 9 && hora < 19) && (diaSemana !== 0);

        elementoStatus.textContent = '';

        // 1. Cria o elemento de ícone
        const icone = document.createElement('i');
        icone.className = 'fas fa-circle';
        icone.style.fontSize = '8px';
        icone.style.verticalAlign = 'middle';
        icone.style.marginRight = '8px'; // Espaçamento entre ícone e texto

        let texto;

        if (aberto) {
            texto = document.createTextNode('ABERTO AGORA');
            elementoStatus.classList.add('status-open');
            elementoStatus.classList.remove('status-closed'); // Garante que não tenha a classe antiga
        } else {
            texto = document.createTextNode('FECHADO (Abre às 09h)');
            elementoStatus.classList.add('status-closed');
            elementoStatus.classList.remove('status-open');
        }

        // 3. Monta o elemento final (Append)
        elementoStatus.appendChild(icone);
        elementoStatus.appendChild(texto);
    }

    // Executa ao carregar
    verificarStatusLoja();


    // 2. Manipulação do Formulário (Simulando integração)
    const form = document.getElementById('agendamentoForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const servico = document.getElementById('servico').value;

        // Simulação de envio (Feedback visual para o usuário)
        const btn = form.querySelector('button');
        const textoOriginal = btn.innerText;

        btn.innerText = "Enviando...";
        btn.style.backgroundColor = "#ccc";

        setTimeout(() => {
            alert(`Obrigado, ${nome}! Recebemos seu pedido de agendamento para ${servico}. Entraremos em contato pelo WhatsApp em breve.`);
            form.reset();
            btn.innerText = textoOriginal;
            btn.style.backgroundColor = "var(--primary-color)";
        }, 1500);
    });

});