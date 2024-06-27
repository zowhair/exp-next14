'use client'
import "./error-404.css";

export default function NotFound() {
  return (
    <div className="error-container">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
                <div className="col-lg-12 text-404">
                    <b>404</b>
                </div>
                <div className="col-lg-12 text">
                    <b> PAGE NOT FOUND </b>
                </div>
                <div className="col-lg-12 text-btn">
                    <a href="https://expeditionasiaa.com"><button name="login" className="btn btn-outline-primary">BACK TO HOME</button></a>
                </div>
            </div>
            <div className="col-lg-2"></div>
        </div>
    </div>
  )
}