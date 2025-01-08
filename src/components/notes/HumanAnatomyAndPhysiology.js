import React from 'react'
import IframeComponent from "../IframeComponent";

function HumanAnatomyAndPhysiology() {


    const pdfUrls =[
    ["https://docs.google.com/document/d/1FfE6tDB-G07T7T7JqexUy9Q8WiOnPmlE/preview","https://drive.google.com/file/d/1FfE6tDB-G07T7T7JqexUy9Q8WiOnPmlE/view"],
["https://docs.google.com/presentation/d/1MYgmvbl2oq592HV6MZr_F06ofebeSfYu/preview","https://drive.google.com/file/d/1MYgmvbl2oq592HV6MZr_F06ofebeSfYu/view"]
]


    return (
        <div className='p-2 pt-16 md:p-16'>
            <h1 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">Human Anatomy and Physiology</h1>
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

export default HumanAnatomyAndPhysiology
