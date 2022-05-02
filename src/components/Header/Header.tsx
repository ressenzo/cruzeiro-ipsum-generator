import './Header.css';

const Header = () => {
    return (
        <div style={{ backgroundColor: "#1E3D8F", color: "#FFF" }} className="cruzeiro-header p-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Cruzeiro ipsum</h1>
                <p className="col-md-8 fs-4">
                    Gerador de lorem ipsum do maior clube brasileiro do século XX
                </p>
            </div>
        </div>
    );
}

export default Header;
