package com.notas;

public class Resposta {
    private boolean sucesso;
    private String mensagem;

    public Resposta(boolean sucesso, String mensagem) {
        this.sucesso = sucesso;
        this.mensagem = mensagem;
    }

    public boolean isSucesso() {
        return sucesso;
    }

    public String getMensagem() {
        return mensagem;
    }
    
}
