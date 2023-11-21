import './stat.css';
import StatTableau from './Stat.js';

function App() {
  const stats = [
    {
      joueur: 'Kevin Durant',
      equipe: 50,
      m: 10,
      mj: 10,
      ppm: 10,
      rpm: 10,
      pdpm: 10,
      mpm: 10,
      eff: 10,
      lf: 10,
      deuxp: 10,
      troisp: 10,
    },
    {
      joueur: 'Kevin Durant',
      equipe: 50,
      m: 10,
      mj: 10,
      ppm: 10,
      rpm: 10,
      pdpm: 10,
      mpm: 10,
      eff: 10,
      lf: 10,
      deuxp: 10,
      troisp: 10,
    },
    {
      joueur: 'Kevin Durant',
      equipe: 50,
      m: 10,
      mj: 10,
      ppm: 10,
      rpm: 10,
      pdpm: 10,
      mpm: 10,
      eff: 10,
      lf: 10,
      deuxp: 10,
      troisp: 10,
    },
    {
      joueur: 'Kevin Durant',
      equipe: 50,
      m: 10,
      mj: 10,
      ppm: 10,
      rpm: 10,
      pdpm: 10,
      mpm: 10,
      eff: 10,
      lf: 10,
      deuxp: 10,
      troisp: 10,
    }
  ];
  const erreur = '' ;
  if(erreur.length > 1){
    return (
      <>
        <div> erreur[0] </div>
      </>
    );
  }
  return (
    <>
      <StatTableau stats={stats}> </StatTableau>
    </>
  );
}

export default App;
