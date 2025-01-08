import React from 'react'
import IframeComponent from '../IframeComponent'

function IPR2() {
    const pdfUrls =[
        ["https://drive.google.com/file/d/1gDQIjK2GlQAbofhkylTA4sgCYO3WBw2w/preview","https://drive.google.com/file/d/1gDQIjK2GlQAbofhkylTA4sgCYO3WBw2w/view"],
        ["https://drive.google.com/file/d/1RB_lJehahO4G3LwsST3qug1308FQC1kb/preview","https://drive.google.com/file/d/1RB_lJehahO4G3LwsST3qug1308FQC1kb/view"],
        ["https://drive.google.com/file/d/1FO-b6-uaJeP1hfUfjkFAs9ExRLDqvjHz/preview","https://drive.google.com/file/d/1FO-b6-uaJeP1hfUfjkFAs9ExRLDqvjHz/view"]      
    ]
    
    
        return (
            <div className='p-2 pt-16 md:p-16'>
                <h1 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">IPR</h1>
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

export default IPR2
