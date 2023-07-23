import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mongoose from 'mongoose';
import Product from '@/models/Product';

const Post = ({ addToCart, product, variants, buyNow }) => {

    const router = useRouter()
    const { slug } = router.query
    const [pin, setPin] = useState()
    const [service, setservice] = useState()
    const [color, setColor] = useState(product.color)


    const checkServiceAbility = async () => {
        let pins = await fetch('http://localhost:3000/api/pincode')
        let pinJson = await pins.json()
        if (Object.keys(pinJson).includes(pin)) {
            setservice(true)
            toast.success('Your Pincode is serviceable :)', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setservice(false)
            toast.error('Sorry, Pincode is not serviceable :(', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const onChangePin = (e) => {
        setPin(e.target.value)
    }

    // For Refreshing Page

    const refreshVaraint = (newcolor) => {

        let url = `http://localhost:3000/product/${variants[newcolor]['slug']}`
        window.location = url;

    }

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <ToastContainer
                    position='top-right'
                    outoClose={1000}
                    hideProgressBar={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className="container px-5 py-16 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto  object-cover object-center rounded shadow-xl" src={product.img} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">KSHIANKI®</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title} ({product.color})</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed text-xl font-semibold text-black">{product.desc}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3 text-md font-semibold text-black">Color:-</span>
                                    {Object.keys(variants).includes('green') && <button onClick={() =>{ refreshVaraint('green') }} className={`border-2 border-gray-300 ml-1 bg-green-600 rounded-full w-6 h-6 focus:outline-none ${color === 'green' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('blue') && <button onClick={() =>{ refreshVaraint('blue') }} className={`border-2 border-gray-300 ml-1 bg-blue-600 rounded-full w-6 h-6 focus:outline-none ${color === 'blue' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('pink') && <button onClick={() =>{ refreshVaraint('pink') }} className={`border-2 border-gray-300 ml-1 bg-pink-600 rounded-full w-6 h-6 focus:outline-none ${color === 'pink' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('red') && <button onClick={() =>{ refreshVaraint('red') }} className={`border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none ${color === 'red' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('white') && <button onClick={() =>{ refreshVaraint('white') }} className={`border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none ${color === 'white' ? 'border-black' : 'border-gray-300'}`}></button>}
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
                                <button onClick={()=>{ buyNow(slug, 1, product.price, product.title,color)}} className="flex ml-10 text-white bg-pink-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-pink-600 rounded">Buy Now</button>
                                <button onClick={() => { addToCart(slug, 1, product.price, product.title,color) }} className="flex ml-5 text-white bg-pink-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-pink-600 rounded">Add to Cart</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="pin mt-6 flex space-x-2 text-sm">
                                <input onChange={onChangePin} className='px-2 border-2 border-gray-400 rounded-md' type="text" placeholder='Enter Pincode' />
                                <button onClick={checkServiceAbility} className='text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded'>Check</button>
                            </div>
                            {(!service && service != null) && <div className='text-red-700 text-sm mt-3'>
                                Sorry! We do not deliver to this pincode yet.
                            </div>}
                            {(service && service != null) && <div className='text-green-700 text-sm mt-3'>
                                Yes! This pincode is servicable.
                            </div>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


// Get server side props

export async function getServerSideProps(context) {

    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }

    let product = await Product.findOne({ slug: context.query.slug })
    let variants = await Product.find({ title: product.title, category: product.category })

    let colorSlug = {}   // dumy content { red: {slug: 'upgrade-your-home}}

    for (let item of variants) {
        if (Object.keys(colorSlug).includes(item.color)) {
            colorSlug[item.color] = { slug: item.slug }
        }
        else {
            colorSlug[item.color] = {}
            colorSlug[item.color] = { slug: item.slug }
        }
    }



    return {

        // Will be passed to the page component as props

        props: {
            product: JSON.parse(JSON.stringify(product)),
            variants: JSON.parse(JSON.stringify(colorSlug))
        },

    }
}

export default Post
