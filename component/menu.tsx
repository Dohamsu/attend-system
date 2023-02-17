import Link from "next/link";
import React from "react";

export default function Menu () {
    return (    
        <nav>
            <Link href="/">
                <a>home</a>
            </Link>
            <Link href="/main">
                <a>main</a>
            </Link> 
        </nav>
        // <nav>
        //     <a href="/">home</a>
        //     <a href="/about">about</a>
        // </nav>
    )
}