import { Fragment } from "react";
import CardJurusan from "./CardJurusan";
import Hero from "./Hero";
import tkj from "../../Asset/tkj.jpg";

const MainContent = () => {
    return(
        <Fragment>
            <Hero />
            <div className="container py-5" id="card">
                <div className="row text-center">
                    <div className="col-12 my-5">
                        <h2>Jurusan</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-12">
                            <CardJurusan image={tkj} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <CardJurusan image={tkj} />
                        </div>
                        <div className="col-lg-4 col-12">
                            <CardJurusan image={tkj} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MainContent;