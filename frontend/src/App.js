import React, { useState } from 'react';

function App() {

  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [nota4, setNota4] = useState('');
  const [nota5, setNota5] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [resultados, setResultados] = useState(null);

  const adicionarAluno = async () => {
    const aluno = {
      nome: nome,
      notas: [
        parseFloat(nota1),
        parseFloat(nota2),
        parseFloat(nota3),
        parseFloat(nota4),
        parseFloat(nota5)
      ],
      frequencia: parseFloat(frequencia)
    };

    try {
      const response = await fetch('/api/adicionar-aluno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
      });
      
      const data = await response.json();
      alert(data.mensagem);
      
      
      setNome('');
      setNota1('');
      setNota2('');
      setNota3('');
      setNota4('');
      setNota5('');
      setFrequencia('');
      
    } catch (error) {
      alert('Erro ao adicionar aluno!');
    }
  };

  const buscarResultados = async () => {
    try {
      const response = await fetch('/api/resultados');
      const data = await response.json();
      setResultados(data);
    } catch (error) {
      alert('Erro ao buscar resultados!');
    }
  };

  return (
    <div>
      <h1>Sistema de Notas</h1>
      
      {/* PRIMEIRA SEÇÃO: Adicionar Aluno */}
      <div>
        <h2>Adicionar Aluno</h2>
        
        <input 
          type="text" 
          placeholder="Nome do aluno"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        
        <input 
          type="number" 
          placeholder="Nota 1"
          value={nota1}
          onChange={(e) => setNota1(e.target.value)}
        />
        
        <input 
          type="number" 
          placeholder="Nota 2"
          value={nota2}
          onChange={(e) => setNota2(e.target.value)}
        />
        
        <input 
          type="number" 
          placeholder="Nota 3"
          value={nota3}
          onChange={(e) => setNota3(e.target.value)}
        />
        
        <input 
          type="number" 
          placeholder="Nota 4"
          value={nota4}
          onChange={(e) => setNota4(e.target.value)}
        />
        
        <input 
          type="number" 
          placeholder="Nota 5"
          value={nota5}
          onChange={(e) => setNota5(e.target.value)}
        />
        
        <input 
          type="number" 
          placeholder="Frequência (%)"
          value={frequencia}
          onChange={(e) => setFrequencia(e.target.value)}
        />
        
        <button onClick={adicionarAluno}>Adicionar Aluno</button>
      </div>
      
      {/* SEGUNDA SEÇÃO: Resultados */}
      <div>
        <h2>Resultados da Turma</h2>
        <button onClick={buscarResultados}>Atualizar Resultados</button>
        
        {resultados && (
          <div>
            <h3>Médias por Disciplina:</h3>
            <p>Disciplina 1: {resultados.medias[0].toFixed(2)}</p>
            <p>Disciplina 2: {resultados.medias[1].toFixed(2)}</p>
            <p>Disciplina 3: {resultados.medias[2].toFixed(2)}</p>
            <p>Disciplina 4: {resultados.medias[3].toFixed(2)}</p>
            <p>Disciplina 5: {resultados.medias[4].toFixed(2)}</p>
            
            <h3>Alunos Acima da Média da Turma:</h3>
            {resultados.alunosAcimaMedia.length > 0 ? (
              resultados.alunosAcimaMedia.map((aluno, index) => (
                <p key={index}>{aluno.nome}</p>
              ))
            ) : (
              <p>Nenhum aluno acima da média</p>
            )}
            
            <h3>Alunos com Frequência Abaixo de 75%:</h3>
            {resultados.alunosFrequenciaBaixa.length > 0 ? (
              resultados.alunosFrequenciaBaixa.map((aluno, index) => (
                <p key={index}>{aluno.nome} - {aluno.frequencia}%</p>
              ))
            ) : (
              <p>Nenhum aluno com frequência baixa</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;