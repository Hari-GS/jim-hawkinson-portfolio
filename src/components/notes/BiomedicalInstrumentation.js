import React from 'react'
import IframeComponent from '../IframeComponent'

function BiomedicalInstrumentation() {
    const pdfUrls =[
        ["https://drive.google.com/file/d/1iXYc9UuR43hcNc3V-L0lntz98N6y7NnX/preview","https://drive.google.com/file/d/1iXYc9UuR43hcNc3V-L0lntz98N6y7NnX/view"],
        ["https://drive.google.com/file/d/1TiWLSQANC6fJH-9xLf5wg3V9XoxSUB5V/preview","https://drive.google.com/file/d/1TiWLSQANC6fJH-9xLf5wg3V9XoxSUB5V/view"],
        ["https://drive.google.com/file/d/1d_tLM1h03bEW_VpYdZCvOtZTA3Awtp2p/preview","https://drive.google.com/file/d/1d_tLM1h03bEW_VpYdZCvOtZTA3Awtp2p/view"],
        ["https://drive.google.com/file/d/1fzc9ROFaYLfjYW1-V09-bFVkiiJ0BG4H/preview","https://drive.google.com/file/d/1fzc9ROFaYLfjYW1-V09-bFVkiiJ0BG4H/view"],
        ["https://drive.google.com/file/d/1n1anclTDuBt_W-tfU_Gzcm5sXgw2zPWC/preview","https://drive.google.com/file/d/1n1anclTDuBt_W-tfU_Gzcm5sXgw2zPWC/view"]        
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

export default BiomedicalInstrumentation
