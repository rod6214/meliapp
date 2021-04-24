const Section = () => {
    return (
    <div>
        <NavBar>
            <NavBarContent>
                <SearchBar src={Logo} />
            </NavBarContent>
        </NavBar>
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <div className="w-75" style={{backgroundColor: 'white', height: '100px'}}>

                </div>
            </div>
        </div>
    </div>
    )
}

export default Section;