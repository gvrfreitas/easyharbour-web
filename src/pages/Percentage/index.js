import React from 'react';

import GraficoTempoMedio from './GraficoTempoMedio';
import GraficoOcupacaoBerco from './GraficoOcupacaoBerco';
import GraficoMediaDeTempo from './GraficoMediaDeTempo';

function Percentage() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <GraficoTempoMedio />
                <GraficoOcupacaoBerco />
                <GraficoMediaDeTempo />
            </div>
        </>
    );
}

export default Percentage;
