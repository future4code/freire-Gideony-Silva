import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './img/gideony.jpg'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={MinhaFoto}
          nome="Gideony" 
          descricao="Oi, eu sou o Gideony. Desenvolvedor Web Full Stake, Me adaptar à qualquer mudança, pronto para superar desafios!"
        />
        
        <ImagemButton 
          imagem="https://img.icons8.com/ios/344/low-priority.png" 
          texto="Ver mais"
        />
      </div>


      <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239295.png?w=740&t=st=1654639866~exp=1654640466~hmac=5b045a11f36654bf570711bfdc33510ea4dcd6f3e95d68b57b54e5e51438b353" 
          nome="Email: " 
          descricao=" gideonywork@gmail.com"
        />

      <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png" 
          nome="Endereço: " 
          descricao=" São Luis - MA"
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/345/345736.png?w=740" 
          nome="Aulixiar Administrativo" 
          descricao="auxiliar na entrada e saida de produtos para transporte e enviar as nfs para o sistema" 
        />
        
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/2942/2942789.png" 
          nome="Monitor" 
          descricao="monitor de classe ajudando o professor e as vezes assumindo o lugar do mesmo, ajudava os alunos com problemas." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
