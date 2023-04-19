const Header = () => {
    return (
        <>
            <div className="pt-3 pb-3 flex w-full">
                <div className="">
                    <span className="ml-20 mr-5">EN</span>
                    <span className="">USD</span>
                </div>
                <div className="absolute right-32">
                    <span className=""><i className="fa fa-user mr-2" aria-hidden="true"></i>My profile</span>
                    <span className="ml-8"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    <span className="ml-8">Items</span>
                    <span className="ml-8">$0.00</span>
                    <span className="ml-8"><i className="fa fa-search" aria-hidden="true"></i></span>
                </div>
            </div>

            <div className="pt-4 pb-4 flex w-full bg-white border-gray-100 border-t-2">
                <div className="">
                    <span className="ml-32 mr-5 font-bold">E-Comm</span>
                </div>
                <div className="absolute right-32">
                    <span className="">HOME</span>
                    <span className="ml-32">BAG</span>
                    <span className="ml-32">SNEAKERS</span>
                    <span className="ml-32">BELT</span>
                    <span className="ml-32">CONTACT</span>
                </div>
            </div >
        </>
    )
}

export default Header;