import React from 'react'

const About = () => {
    return (
        <>
            <div className="container abt_container"
                style={{
                    'marginTop': '2rem',
                    'marginBottom': '2rem'
                }}>
                <h2 className="abt_heading"><a id="about">About Us</a></h2>
                <div className="row">
                    <div className="col-md-6 mb-5 mb-lg-0">
                        <img src="./pic6.jpg" className="img-fluid" alt="silver watch image" />
                    </div>
                    <div className="col-md-6 text-md-left">
                        <p style={{
                            'textAlign': 'justify',
                            'fontSize': '1rem',
                            'lineHeight': '1.5'
                        }}>
                            At <strong>WatchUp</strong>, With a passion for timepieces that never goes out of style, we're committed to bringing you the latest and greatest in watch fashion. Our trending watches are designed to impress, with sleek designs, vibrant colors, and cutting-edge technology. Whether you're a watch enthusiast or just looking for a cool watch to complete your outfit, our collection has something for everyone. From affordable fashion watches to high-end luxury timepieces, we offer the best watches that blend quality, style, and value. So why settle for an ordinary watch when you can wear a statement piece that reflects your personality? Explore our selection today and find the perfect wrist watch that's both functional and fashionable!
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default About