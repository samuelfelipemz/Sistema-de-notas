package com.notas;

import java.util.List;
import java.util.ArrayList;



public class Turma {
    private List<Aluno> alunos;

    public Turma() {
        this.alunos = new ArrayList<>();
        
    }

    public void adicionarAluno (Aluno aluno){
        this.alunos.add(aluno);
        
    }

public double [] calcularMediaMateria() {
    double medias[] = new double[5];

    if (alunos.isEmpty()) {
        return medias;
    }
    for (int i = 0; i < 5; i++) {
        double soma = 0;
        for (Aluno aluno : alunos) {
            soma += aluno.getNotas()[i];
        }
        medias[i] = soma / alunos.size();

    }

    return medias;
}

public List<Aluno> getAlunosAcimaDaMedia(){
    List<Aluno> acimaMedia = new ArrayList<>();
    
    if (alunos.isEmpty()) {
        return acimaMedia;
    }
    
    double somaMedias = 0;

    for (Aluno aluno : alunos){
        somaMedias += aluno.calcularMedia();
    }
    
    double mediaTurma = somaMedias / alunos.size();

    for (Aluno aluno : alunos){
        if (aluno.calcularMedia() > mediaTurma){
            acimaMedia.add(aluno);
        }
    }
    
    return acimaMedia;
}

    
public List<Aluno> getAlunoFrequenciaBaixa(){
    List<Aluno> frequenciaBaixa = new ArrayList<>();

    for (Aluno aluno : alunos) {
        if (aluno.getFrequencia() < 75)  {
                frequenciaBaixa.add(aluno);
            }
            
    }
    return frequenciaBaixa;
}


}
