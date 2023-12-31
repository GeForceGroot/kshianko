import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdAccountCircle } from 'react-icons/md'
import { AiOutlineShoppingCart, AiFillMinusCircle, AiFillPlusCircle, AiFillCloseCircle } from 'react-icons/ai'
import { useRef } from 'react'
import { BsBagHeartFill, BsFillCartXFill } from 'react-icons/bs'
import { BiLogIn } from 'react-icons/bi'
const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isNestedOpen, setIsNestedOpen] = useState(false);
    const [isNestedOpen1, setIsNestedOpen1] = useState(false);
    const [isNestedOpen2, setIsNestedOpen2] = useState(false);
    const [dropdown, setDropdown] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleNestedDropdown = () => {
        setIsNestedOpen(!isNestedOpen);
    };
    const toggleNestedDropdown1 = () => {
        setIsNestedOpen1(!isNestedOpen1);
    };
    const toggleNestedDropdown2 = () => {
        setIsNestedOpen2(!isNestedOpen2);
    };

    const ref = useRef();


    const toggleCart = () => {
        // setSidebar(!sidebar)
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }


    return (
        <>
            <header className="text-gray-600 body-font shadow-lg mb-1 sticky top-0 bg-white z-10">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Link href='/'>
                            <img src="/websiteLogo.jpg" alt='GeFroceGrot' width={80} height={20} />
                        </Link>
                        <span className="ml-3 mt-4 text-2xl">KSHIANKI®</span>
                    </span>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-pink-600 text-xl font-semibold" href={'/'}>Home</Link>
                        <div>
                            <div className="relative inline-block text-left">
                                <button
                                    type="button"
                                    className="inline-flex justify-center items-center space-x-1 px-4 py-2 text-m leading-5 font-medium rounded-md text-black-700 transition ease-in-out duration-150"
                                    onClick={toggleDropdown}
                                >
                                    <span className='font-medium text-xl hover:text-pink-600'>Home Furnishing</span>
                                    <svg
                                        className={`-mr-1 ml-2 h-4 w-4 hover:text-pink-600 ${isNestedOpen ? 'transform rotate-180' : ''
                                            }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 011.4-1.4L10 9.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-.7.3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                {isOpen && (
                                    <div className="absolute left-0 mt-4  w-40 rounded-md shadow-lg ">
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <a
                                                className="cursor-pointer block px-4 py-2 text-lg leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                onClick={toggleNestedDropdown}
                                            >
                                                Bed Sheets
                                                <svg
                                                    className={`-mr-1 ml-2 h-4 w-4 ${isNestedOpen ? 'transform rotate-180' : ''
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 011.4-1.4L10 9.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-.7.3z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>

                                            {isNestedOpen && (
                                                <div className="pl-6">
                                                    <Link
                                                        href={"/homeFurnishing/singleBedSheets"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Single Bedsheet
                                                    </Link>
                                                    <Link
                                                        href={"/homeFurnishing/doubleBedSheet"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Double Bedsheet
                                                    </Link>
                                                    <Link
                                                        href={"/homeFurnishing/pureCottonBedSheet"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Pure Cotton Bedsheet
                                                    </Link>
                                                    <Link
                                                        href={"/homeFurnishing/kidsSpecialKingSizeBedSheets"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Kid's Special King Size Bedsheet
                                                    </Link>
                                                    <Link
                                                        href={"/homeFurnishing/kingSizeElaticFittedBedSheet"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        King Size Elastic/Fitted Bedsheet
                                                    </Link>
                                                    <Link
                                                        href={"/homeFurnishing/superKingSizeBedSheets"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Super King Size Bedsheet
                                                    </Link>
                                                    <Link
                                                        href={"/homeFurnishing/bookFoldingBedSheetSet"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Book Folding Bedsheet Set
                                                    </Link>
                                                    <Link
                                                        href={"/homeFurnishing/bedCover"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Bed Covers
                                                    </Link>
                                                    <Link
                                                        href={"/homeFurnishing/winterBedSheets"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Winter Bedsheets
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <a
                                                className="cursor-pointer block px-4 py-2 text-lg leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                onClick={toggleNestedDropdown1}
                                            >
                                                Cushion
                                                <svg
                                                    className={`-mr-1 ml-2 h-4 w-4 ${isNestedOpen1 ? 'transform rotate-180' : ''
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 011.4-1.4L10 9.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-.7.3z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>

                                            {isNestedOpen1 && (
                                                <div className="pl-6">
                                                    <Link
                                                        href={"/cushions/cushionFillers"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Cushion Fillers
                                                    </Link>
                                                    <Link
                                                        href={"/cushions/cushionCover"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Cushion Cover
                                                    </Link>
                                                    <Link
                                                        href={"/cushions/cushionCoversWithFillers"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Cushion Covers With Fillers
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <a
                                                className="cursor-pointer block px-4 py-2 text-lg leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                onClick={toggleNestedDropdown2}
                                            >
                                                Table
                                                <svg
                                                    className={`-mr-1 ml-2 h-4 w-4 ${isNestedOpen2 ? 'transform rotate-180' : ''
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 011.4-1.4L10 9.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-.7.3z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>

                                            {isNestedOpen2 && (
                                                <div className="pl-6">
                                                    <Link
                                                        href={"/table/tableRunner"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Table Runner
                                                    </Link>
                                                    <Link
                                                        href={"/table/tableCover"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Table Cover
                                                    </Link>
                                                    <Link
                                                        href={"/table/tableMats"}
                                                        className="block px-4 py-2 text-m leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                                    >
                                                        Table Mats
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <Link
                                                href={'/comforter'}
                                                className="block px-4 py-2 text-lg leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                            >
                                                Comforter
                                            </Link>
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <Link
                                                href={'/carpet'}
                                                className="block px-4 py-2 text-lg leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                            >
                                                Carpet
                                            </Link>
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <Link
                                                href={'/diwanSet'}
                                                className="block px-4 py-2 text-lg leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                            >
                                                Diwan Set
                                            </Link>
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <Link
                                                href={'/rugs'}
                                                className="block px-4 py-2 text-lg leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                            >
                                                Rugs
                                            </Link>
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <Link
                                                href={'/blankets'}
                                                className="block px-4 py-2 text-lg leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                            >
                                                Blankets
                                            </Link>
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <Link
                                                href={'/quilt'}
                                                className="block px-4 py-2 text-lg leading-5 text-gray-700 hover:bg-pink-500 hover:text-white focus:outline-none focus:bg-pink-500 focus:text-white"
                                            >
                                                Quilt
                                            </Link>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <Link className="mr-5 hover:text-pink-600 font-semibold text-xl" href='/bathTowels'>Bath Towels</Link>
                        <Link className="mr-5 hover:text-pink-600 font-semibold text-xl" href='/womenWear/kurti'>Kurtis</Link>
                    </nav>
                    {user.value &&<div className="inline-flex items-center bg-gray-100 border-0 py-1 mx-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-3xl mt-4 md:mt-0 ">
                        <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }}>
                            {dropdown && <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className='absolute right-80 bg-white shadow-xl border border-pink-300 top-24 rounded-md py-6 px-8 w-40'>
                                <ul>
                                    <Link href={'/myaccount'}>
                                    <li className='py-1 text-sm hover:text-pink-700 font-bold'>My Account</li>
                                    </Link>
                                    <hr className='font-bold' />
                                    <Link href={'/orders'}>
                                    <li className='py-1 text-sm hover:text-pink-700 font-bold'>Orders</li>
                                    </Link>
                                    <hr />
                                    <li onClick={logout} className='py-1 text-sm hover:text-pink-700 font-bold cursor-pointer'>Logout</li>
                                </ul>
                            </div>}
                             <MdAccountCircle />
                        </div>
                    </div> }
                    {!user.value && <Link href={'/login'}>
                        <button className='inline-flex items-center bg-gray-100 border-0 py-1 mx-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-3xl mt-4 md:mt-0 '><BiLogIn /></button>
                    </Link>}
                    <button onClick={toggleCart} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-3xl mt-4 md:mt-0 mx-5 "><AiOutlineShoppingCart />
                    </button>

                    <div ref={ref} className={`w-90 h-[100vh] px-12 overflow-y-scroll sideCart absolute right-0 top-0 bg-pink-200 p-20 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`}>
                        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                        <span onClick={toggleCart} className='absolute top-5 right-3 cursor-pointer text-2xl text-pink-500'><AiFillCloseCircle /></span>
                        <ol className='list-decimal font-semibold'>

                            {Object.keys(cart).length == 0 &&
                                <div className='my-4  font-semiboldbold'>Your Cart Is Empty!</div>}
                            {Object.keys(cart).map((k) => {
                                return <li key={k}>
                                    <div className="item flex my-5">
                                        <div className='w-2/3 font-semibold text-lg'>{cart[k].name} ({cart[k].variant})</div>
                                        <div className='w-1/3 font-semibold flex items-center justify-center text-xl'><AiFillMinusCircle className='mx-2 text-2xl cursor-pointer text-pink-500' onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].variant) }} /> {cart[k].qty} <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].variant) }} className='mx-2 text-2xl cursor-pointer text-pink-500' /></div>
                                    </div>
                                </li>
                            })}
                        </ol>
                        <div className='font-bold my-2'>Subtotal: ₹{subTotal}</div>
                        <div className="flex">
                            <Link href={'/checkout'}>
                                <button className=" disabled:bg-pink-500 mr-3 flex text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded text-lg"><BsBagHeartFill className='m-1 text-xl' />Checkout</button>
                            </Link>
                            <button onClick={clearCart} className=" disabled:bg-pink-500 mr-3 flex text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded text-lg"><BsFillCartXFill className='m-1 text-xl' />Clear Cart</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
