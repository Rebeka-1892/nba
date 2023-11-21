function StatTableau({ stats }) {

    return (
        <>
            <div className="tableau">
                <h1>Statistiques individuelles</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Classement</th>
                                <th>Joueur</th>
                                <th>Equipe</th>
                                <th>M</th>
                                <th>MJ</th>
                                <th>PPM</th>
                                <th>RPM</th>
                                <th>PDPM</th>
                                <th>MPM</th>
                                <th>EFF</th>
                                <th>%LF</th>
                                <th>2P%</th>
                                <th>3P%</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.map((stat, index) => (
                            <tr key={index}>
                                <td> {index+1}     </td>
                                <td> {stat.joueur} </td>
                                <td className="nombre"> {stat.equipe}   </td>
                                <td className="nombre"> {stat.m }       </td>
                                <td className="nombre"> {stat.mj }      </td>
                                <td className="nombre"> {stat.ppm }     </td>
                                <td className="nombre"> {stat.rpm }     </td>
                                <td className="nombre"> {stat.pdpm }    </td>
                                <td className="nombre"> {stat.mpm }     </td>
                                <td className="nombre"> {stat.eff }     </td>
                                <td className="nombre"> {stat.lf }      </td>
                                <td className="nombre"> {stat.deuxp }   </td>
                                <td className="nombre"> {stat.troisp }  </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default StatTableau;
