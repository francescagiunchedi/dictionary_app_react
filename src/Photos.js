import React from "react";
import "./photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row justify-content-center">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-3 d-flex" key={index}>
                <a href={photo.src.original}>
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
