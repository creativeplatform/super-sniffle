import React, { useState } from 'react';
import WertModule from '@wert-io/module-react-component';
import { signSmartContractData } from '@wert-io/widget-sc-signer';

function Wert() {
    const signedData = signSmartContractData(options, privateKey);
    const [wertOptions, setWertOptions] = useState({partner_id: `${process.env.NEXT_PUBLIC_PARTNER_ID}`, origin:'https://sandbox.wert.io', extra: '', container_id: '', commodity: '', signature: '', listeners: {loaded: () => console.log('loaded'),}})
    

    const wertWidget = new WertModule({
        ...signedData,
        ...setWertOptions,
    });

    return (
      <>
        <button onClick={wertWidget}>
        </button>
      </>
    );
}