import React from "react";
import Result from "./Result";
import Dummy from "../Dummy.json";

export default function ResulPage() {
  return Dummy.map((v, i) => {
    return (
      <Result
        key={i}
        flavor={v.flavor}
        images={v.images}
        desc={v.description}
        goodCombi={v.goodCombi}
        badCombi={v.badCombi}
        id={v.flavorId}
      />
    );
  });
}
