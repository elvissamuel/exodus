
const wip_temp ={
   
        "CoverDesign": false,
        "CoverDesignType": null,
        "Editing": false,
        "ISBN": false,
        "InsideLayout": true,
        "InsideLayoutType": null,
        "ProofReading": false,
        "artIllustration": false,
        "artIllustrationType": "",
        "bookSize": "",
        "book_name": "",
        "created_at": "",
        "current_book_format": "",
        "id": "",
        "name": "",
        "newsPrint": false,
        "number_of_words": null,
        "onlineSale": false,
        "portrait": true,
        "projectType": "",
        "readyToPrint": false,
        "status": null,
        "title": null,
        "word_count": '',
        "workInProgress": true
  
}

const rtp_temp ={
    
    "BWprint": false,
    "Bothprint": false,
    "Colorprint": false,
    "Editing": false,
    "Embossing": false,
    "Foiling": false,
    "GlossyLamination": false,
    "ISBN": false,
    "SpotLamination": false,
    "artIllustration": false,
    "artIllustrationType": "Simple fiction/non-fiction layout (no graphics or images)",
    "bookSize": "5x8",
    "book_name": "Oritse is Here",
    "creamPaper": false,
    "created_at": "2023-02-16T09:48:17.418244",
    "delivery_name": null,
    "delivery_phone": null,
    "email": "woleekanola@gmail.com",
    "glossyPaper": false,
    "hardBinding": false,
    "hard_cover": false,
    "id": "HhKqAtydonIEp180RPC",
    "name": "Wole Ekanola",
    "newsPrint": false,
    "no_of_books": null,
    "number_of_pages": 0,
    "onlineSale": false,
    "paperBinding": false,
    "paper_type": null,
    "phone_number": 8121751210,
    "pick_up": false,
    "portrait": true,
    "projectType": "magazine",
    "quantity_of_BW": 0,
    "quantity_of_Color": 0,
    "readyToPrint": false,
    "shipping_address": null,
    "shipping_instruction": null,
    "shipping_state": null,
    "stapleBinding": false,
    "status": null,
    "title": null,
    "whitePaper": false,
     "workInProgress": false

}

const Book_Options_Table =(props)=>{
  let data
    if(props.book.readyToPrint){

     data   = Object.assign(rtp_temp, props.book)
     return(
         <table className=" w-full h-full  ">
         <thead>
             <tr className="bg-blue text-white  ">
             <th className="text-left pl-2">Order Type</th>
             <th className="text-right pr-2">{data.projectType} printing</th>
             </tr>
         </thead>
         <tbody>
         <tr className='bg-[#e6e6f8]' >
             <td className='pl-2'>Number of Copies</td>
             <td className="text-right pr-2">{data.no_of_books} </td>
             </tr>
             <tr className='bg-[#f0f0f9]'>
             <td className='pl-2'>Paper Type</td>
             <td className="text-right pr-2">{data.creamPaper ? 'Cream Paper' : data.glossyPaper ? 'Glossy Paper' : 'White Paper'}</td>
             </tr>
             <tr className='bg-[#e6e6f8]'>
             <td className='pl-2'>Binding</td>
             <td className="text-right pr-2">{data.hardBinding ? 'Hard Cover Binding' : data.paperBinding ? 'Paper Back Binding' : 'Staple Binding'}</td>
             </tr><tr className='bg-[#f0f0f9]'>
             <td className='pl-2'>Print Type</td>
             <td className="text-right pr-2">{data.BWprint ? 'Colored & Black and White' : data.ColorPrint ? 'Colored ' : 'Black and White '}</td >
             </tr>
            
             <tr className='bg-[#e6e6f8]' >
             <td className='pl-2'>Number of Pages</td>
             <td className="text-right pr-2 font-extrabold">{data.number_of_pages} </td>
             </tr>
             <tr className='bg-[#f0f0f9]'>
             <td className='pl-2'>Book Size</td>
             <td className="text-right pr-2">{data.bookSize} </td>
             </tr>
             <tr className='bg-[#e6e6f8]'>
             <td className='pl-2'>Layout Style</td>
             <td className="text-right pr-2">{data.portrait? 'Portrait': 'Landscape'}</td>
             </tr>
             <tr className='bg-[#f0f0f9]'>
             <td className='pl-2'>ISBN</td>
             <td className="text-right pr-2">{data.ISBN? 'Yes': 'No'}</td>
             </tr>
             <tr className='bg-[#e6e6f8]'>
             <td className='pl-2'>Lamination</td>
             <td className="text-right pr-2">{data.GLossyLamination ? 'Glossy Lamination' : 'Matte Lamination'}</td>
             </tr>
             <tr className='bg-[#f0f0f9]'>
             <td className='pl-2'>Embossing</td>
             <td className="text-right pr-2"> {data.Embossing? 'Yes': 'No'} </td>
             </tr>
             <tr className='bg-[#e6e6f8]'>
             <td className='pl-2'>Foiling</td>
             <td className="text-right pr-2">{data.Foiling? 'Yes': 'No'}</td>
             </tr>
             <tr className='bg-[#f0f0f9]'>
             <td className='pl-2'>Spot Lamination</td>
             <td className="text-right pr-2"> {data.SpotLamination? 'Yes': 'No' } </td>
             </tr>
       
 
       
 
 
      
         </tbody>
         </table>
     )
    }else{
        data   = Object.assign(wip_temp, props.book)
        return(
            <table className=" w-full h-full  ">
            <thead>
                <tr className="bg-blue text-white  ">
                <th className="text-left pl-2">Order Type</th>
                <th className="text-right pr-2">{data.projectType} printing</th>
                </tr>
            </thead>
            <tbody>
            <tr className='bg-[#e6e6f8]' >
                <td className='pl-2'>Number of Words</td>
                <td className="text-right pr-2">{data.word_count} </td>
                </tr>
                <tr className='bg-[#f0f0f9]'>
                <td className='pl-2'>Current Book Format</td>
                <td className="text-right pr-2">{data.current_book_format}</td>
                </tr>
                <tr className='bg-[#f0f0f9]'>
                <td className='pl-2'>Book Size</td>
                <td className="text-right pr-2">{data.bookSize} </td>
                </tr>
                <tr className='bg-[#e6e6f8]'>
                <td className='pl-2'>Layout Style</td>
                <td className="text-right pr-2">{data.portrait? 'Portrait': 'Landscape'}</td>
                </tr>
                <tr className='bg-[#f0f0f9]'>
                <td className='pl-2'>ISBN</td>
                <td className="text-right pr-2">{data.ISBN? 'Yes': 'No'}</td>
                </tr>
          
                <tr className='bg-[#f0f0f9]'>
                <td className='pl-2'>Inside Layout</td>
                <td className="text-right pr-2"> {data.InsideLayout? 'Yes': 'No'} </td>
                </tr>
                <tr className='bg-[#f0f0f9]'>
                <td className='pl-2'>Inside Layout Type</td>
                <td className="text-right pr-2">{data.InsideLayoutType} </td>
                </tr>
           
                <tr className='bg-[#e6e6f8]'>
                <td className='pl-2'>Cover Design</td>
                <td className="text-right pr-2"> {data.CoverDesign? 'Yes': 'No' } </td>
                </tr>
                <tr className='bg-[#f0f0f9]'>
                <td className='pl-2'>Cover Design Type</td>
                <td className="text-right pr-2">{data.CoverDesignType} </td>
                </tr>
                <tr className='bg-[#f0f0f9]'>
                <td className='pl-2'>Editing</td>
                <td className="text-right pr-2"> {data.Editing? 'Yes': 'No' } </td>
                </tr>
    
    
                <tr className='bg-[#e6e6f8]'>
                <td className='pl-2'>Proof Reading</td>
                <td className="text-right pr-2"> {data.ProofeReading? 'Yes': 'No' } </td>
                </tr>
    
              
            </tbody>
            </table>
        )
    }

}

export default Book_Options_Table