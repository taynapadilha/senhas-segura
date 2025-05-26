function verificarSenha() {
    let senha = document.getElementById("senha").value;
    let resultado = document.getElementById("resultado");

    let forca = 0;
    if (senha.length >= 8) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[a-z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[^A-Za-z0-9]/.test(senha)) forca++;

    let mensagem = "";
    switch (forca) {
        case 5: mensagem = "Senha Forte! ✅"; break;
        case 4: mensagem = "Senha Boa! 👍"; break;
        case 3: mensagem = "Senha Razoável! ⚠️"; break;
        case 2: mensagem = "Senha Fraca! 🚨"; break;
        default: mensagem = "Senha Muito Fraca! ❌"; break;
    }

    resultado.textContent = mensagem;
}

function gerarSenha() {
    let comprimento = document.getElementById("comprimento").value;
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let senha = "";
    for (let i = 0; i < comprimento; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById("senha-gerada").textContent = "Senha Segura: " + senha;
}
