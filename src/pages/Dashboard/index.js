import React from 'react';

import GraficoTempoMedio from './GraficoTempoMedio';
import GraficoOcupacaoBerco from './GraficoOcupacaoBerco';
import GraficoMediaDeTempo from './GraficoMediaDeTempo';
import GraficoAtracacao from './GraficoAtracacao';
import InfoNavios from './InfoNavios';

function Dashboard() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <GraficoTempoMedio />
                <GraficoOcupacaoBerco />
                <GraficoMediaDeTempo />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <GraficoAtracacao />
                <InfoNavios />
            </div>
        </>
    );
}

export default Dashboard;
