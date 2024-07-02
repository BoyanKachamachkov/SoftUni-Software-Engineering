// import React from "react";

import MainHeading from "./MainHeading";
import ParagraphExpression from "./ParagraphExpression";


export default function Header() {
    // return React.createElement('header', {}, 'Header test');
    return (
        <header>
            <MainHeading />
            <ParagraphExpression />
        </header>
    );
}