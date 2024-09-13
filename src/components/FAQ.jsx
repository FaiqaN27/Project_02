import React from 'react'

const FAQ = () => {

    const faqData = [
        {
            id: 0,
            question: "What types of watches do you offer?",
            answer: " We offer luxury watches from top brands, including Swiss, German, and Japanese watches. Our selection includes men's and women's watches, as well as limited edition and specialty watches."
        },
        {
            id: 1,
            question: "Are your watches authentic?",
            answer: "Yes, all our watches are 100% authentic and come with a manufacturer's warranty. We only sell genuine watches from authorized dealers."
        },
        {
            id: 2,
            question: "Do you offer international shipping?",
            answer: "Yes, we ship worldwide to over 200 countries. Shipping rates and delivery times vary depending on your location."
        },
        {
            id: 3,
            question: "Can I customize my watch (e.g. engraving, straps)?",
            answer: "Yes, we offer customization options, including engraving and strap replacements. Please contact our customer service for more information."
        },
        {
            id: 4,
            question: "How do I care for my watch?",
            answer: " To keep your watch in good condition, avoid exposing it to extreme temperatures, magnetic fields, or water (if not water-resistant). Clean your watch regularly with a soft cloth"
        },
    ]

    return (
        <div className='container'>
            <h2 id='faq' className='faq-heading'>FAQ</h2>
            <div className="accordion" id="accordionExample">
                {faqData.map((data) => {
                    return (
                        <div className="accordion-item" key={data.id}>
                            <h2 className="accordion-header" id={`heading ${data.id}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${data.id}`} aria-expanded="true" aria-controls={`collapse${data.id}`}>
                                    {data.question}
                                </button>
                            </h2>
                            <div id={`collapse${data.id}`} className="accordion-collapse collapse " aria-labelledby={`heading${data.id}`} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {data.answer}
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default FAQ