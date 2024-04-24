import React from 'react'

const MenuTemplate = () => {


    const menulist = [
        {
            item: "MARGARITA", price: '$5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate aut quas, esse omnis ipsam id'
        },
        {
            item: "MARGARITA", price: '$5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate aut quas, esse omnis ipsam id'
        },
        {
            item: "MARGARITA", price: '$5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate aut quas, esse omnis ipsam id'
        },
        {
            item: "MARGARITA", price: '$5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate aut quas, esse omnis ipsam id'
        },
        {
            item: "MARGARITA", price: '$5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate aut quas, esse omnis ipsam id'
        },
    ]

    return (
        <div className='menu-template'>
            <div className='menu-inner-card py-3 px-3'>
                <img src={require('../assets/images/GroupleftLeaf.png')} alt='' className='leftLeaf' />
                <img src={require('../assets/images/Groupgrass-3.png')} alt='' className='rightLeaf' />
                <div className='row'>

                    <div className='col-lg-4 col-md-6 col-sm-12 text-center position-relative'>
                        <div className='d-flex justify-content-center'>
                            <div className='resturant_name text-capitalize mt-5 px-4'>
                                <span>RESTAURANT NAME</span>
                            </div>
                        </div>
                        <div className='menu-title mt-2'>
                            <h1 className='mb-0'>cocktail</h1>
                        </div>
                        <h2 className='menu-heading'>MENU</h2>
                        <div className='glass-icon-wrapper position-relative'>
                            <img src={require('../assets/images/Groupclass-1.png')} alt='' className='glass-icon' />
                            <img src={require('../assets/images/Groupglass-2.png')} alt='' className='glass-icon-2' />
                        </div>
                        <img src={require('../assets/images/Groupgrass.png')} alt='' className='grass-icon' />
                        <img src={require('../assets/images/Groupgrass-2.png')} alt='' className='grass-icon-2' />
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12 text-center second-col'>
                        <div className='first-content-wrapper mt-2 mb-4 ps-3 pe-2 pt-3 pb-lg-5 pb-md-3 mb-sm-3'>
                            <h3 className='mb-lg-5 mb-md-3' style={{ fontWeight: '400', color: '#8F4F6C' }}>TYPE OF COCKTAIL</h3>

                            {menulist.map((item) => (
                                <div className='d-flex justify-content-between align-items-end gap-lg-3 gap-md-2 gap-sm-1 mt-4'>
                                    <img src={require('../assets/images/Groupmargarita.png')} alt='' className='item-icon' />
                                    <div className='d-flex'>
                                        <span className='price'>{item.price}</span>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <h4 className='menu-list-item text-start mb-2'>{item.item}</h4>
                                        <p className='text-start mb-0 item-desc'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
                        <div className='first-content-wrapper mt-2 mb-4 ps-3 pe-2 pt-3 pb-lg-5 pb-md-3'>
                            <h3 className='mb-lg-5 mb-md-3' style={{ fontWeight: '400', color: '#8F4F6C' }}>TYPE OF COCKTAIL</h3>

                            {menulist.map((item) => (
                                <div className='d-flex justify-content-between align-items-end gap-lg-3 gap-md-2 gap-sm-1 mt-4'>
                                    <img src={require('../assets/images/Groupmargarita.png')} alt='' className='item-icon' />
                                    <div className='d-flex'>
                                        <span className='price'>{item.price}</span>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <h4 className='menu-list-item text-start mb-2'>{item.item}</h4>
                                        <p className='text-start mb-0 item-desc'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

            <footer className="text-center footer pt-5 px-1 px-md-0">
                <section>
                    <div className="text-center d-flex justify-content-center px-5">
                       <span style={{color: '#4C4C4C', fontSize: '20px'}}>designed by 
                       <img src={require('../assets/images/Groupfreebik.png')} style={{ width: '30px', height: '30px'}} /> freeebik.com</span>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default MenuTemplate