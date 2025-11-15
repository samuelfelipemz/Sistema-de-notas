package com.notas;

import java.util.List;
import static spark.Spark.*;
import com.google.gson.Gson;

public class Main {
    public static void main(String[] args) {
    port(4567);
    
    // Configuração CORS completa
    before((request, response) -> {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Request-Method", "*");
        response.header("Access-Control-Allow-Headers", "*");
        response.type("application/json");
    });
    
    after((request, response) -> {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    });
    
    // OPTIONS para todas as rotas
    options("/*", (request, response) -> {
        response.status(200);
        return "";
    });
    
    Gson gson = new Gson();
    Turma turma = new Turma();
    
    System.out.println("Servidor rodando na porta 4567!");
    
    
    post("/adicionar-aluno", (req, res) -> {
        res.type("application/json");
        
        String body = req.body();
        AlunoRequest alunoReq = gson.fromJson(body, AlunoRequest.class);
        
        Aluno aluno = new Aluno(
            alunoReq.nome, 
            alunoReq.notas, 
            alunoReq.frequencia
        );
        
        turma.adicionarAluno(aluno);
        
        return gson.toJson(new Resposta(true, "Aluno adicionado com sucesso!"));
    });
    
    
    get("/resultados", (req, res) -> {
        res.type("application/json");
        
        ResultadoTurma resultado = new ResultadoTurma();
        resultado.medias = turma.calcularMediaMateria();
        resultado.alunosAcimaMedia = turma.getAlunosAcimaDaMedia();
        resultado.alunosFrequenciaBaixa = turma.getAlunoFrequenciaBaixa();
        
        return gson.toJson(resultado);
    });
}
}