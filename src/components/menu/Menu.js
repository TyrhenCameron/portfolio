"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";

import "./menu.css";

import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';

const menuLinks = [
{path: "/", label: "Home"},
{path: "/projects", label: "Projects"},
{path: "/contact", label: "Contact"},
];

const Menu = () => {
    const container = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tl = useRef();

    const toggleMenu = () => {

        setIsMenuOpen(!isMenuOpen)
    };

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", {y: 75});

    tl.current = gsap.timeline({paused: true}).to(".menu-overlay",
        {
        duration: 1.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power3.inOut",
        })
        .to(".menu-link-item-holder", {
             y:0,
             duration: 1.0,
             stagger: .25,
             ease: "power3.inOut",
             delay: -0.65,
        });
    },
    { scope: container }
);

useEffect(() => {
    if (isMenuOpen) {
        tl.current.play();
    } else {
        tl.current.reverse();
    }
}, [isMenuOpen, tl.current]);

  return (
  <div className="menu-container" ref={container}>
    <div className="menu-bar">
        <div className="menu-logo">
            <Link href="/">Tyrhen Cameron - Software / Cloud Engineer </Link>
        </div>
    <div className="menu-open" onClick={toggleMenu}>
        <p>Menu</p>
    </div>
    </div>
<div className="menu-overlay">
    <div className="menu-overlay-bar">
    <div className="menu-logo">
        <Link href="/">Tyrhen Cameron - Software / Cloud Engineer</Link>
    </div>
    <div className="menu-close" onClick={toggleMenu}>
        <p>Close</p>
        </div>
    </div>
    <div className="menu-close-icon">
        <span className="close-button" onClick={toggleMenu}>&#x2715;</span>
    </div>
    <div className="menu-copy">
        <div className="menu-links">
            {menuLinks.map((link, index) => (
            <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                    <Link href={link.path} className="menu-link">
                    {link.label}
                    </Link>
                </div>
            </div>
            ))}
    </div>
    <div className="menu-info">
    <div className="menu-info-col">
    <div className="menu-info-col">
        <p>Email: tyrhencameron@gmail.com</p>
    </div>
    <a href="https://www.linkedin.com/in/tyrhen-cameron/">LinkedIn &#8599;</a>
    <a href="https://github.com/TyrhenCameron">GitHub &#8599;</a>
    </div>
    </div>
    </div>
    <div className="menu-preview"></div>
</div>
  </div>
  );
};

export default Menu
