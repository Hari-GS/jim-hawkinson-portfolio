import React from 'react'
import IframeComponent from '../IframeComponent'

function MedicalOptics() {
    const pdfUrls =[
        ["https://drive.google.com/file/d/1mL9Jl9JcrvxMQuIR5kORpuwOSGnjvrzr/preview","https://drive.google.com/file/d/1mL9Jl9JcrvxMQuIR5kORpuwOSGnjvrzr/view"],
        ["https://drive.google.com/file/d/1nO0lLX01TFWyXROswU721Uy3bII3zpgW/preview","https://drive.google.com/file/d/1nO0lLX01TFWyXROswU721Uy3bII3zpgW/view"],
        ["https://drive.google.com/file/d/1VPtmVAVvFtcLDOw9e7g4LQhQsiG-9ogc/preview","https://drive.google.com/file/d/1VPtmVAVvFtcLDOw9e7g4LQhQsiG-9ogc/view"]      
    ]
    
    
        return (
            <div className='p-2 pt-16 md:p-16'>
                <h1 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">Bio medical Instrumentation</h1>
                <div className="space-y-8">
                    {pdfUrls.map((url, index) => (
                    <IframeComponent
                        key={index}
                        src={url[0]}
                        title={`PDF Document ${index + 1}`}
                        gDrive = {url[1]}
                    />
                    ))}
                </div>
            </div>
        )
}

export default MedicalOptics
