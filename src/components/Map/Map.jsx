import React from "react";
import s from "./Map.module.css";

export default function Map() {
  return (
    <div className={s.map_wrapper}>
      <div className={s.map}>
        <iframe
          title="googleMaps"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          // src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Graftoten%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Linkstra%C3%9Fe%202,%208%20OG,%2010785,%20Berlin,%20Deutschland+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}
