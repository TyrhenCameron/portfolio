"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

import "./menu.css";

import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';

const Menu = () => {
    const t = useTranslations('menu');
    const locale = useLocale();
    const container = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuLinks = [
        {path: "/", label: t('home')},
        {path: "/projects", label: t('projects')},
        {path: "/contact", label: t('contact')},
    ];

    const tl = useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", {y: 120});

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
            <Link href="/">{t('title')}</Link>
        </div>
        <div className="menu-bar-right">
            <LanguageSwitcher />
            <div className="menu-open" onClick={toggleMenu}>
                <p>{t('menuButton')}</p>
            </div>
        </div>
    </div>
<div className="menu-overlay">
    <div className="menu-overlay-bar">
    <div className="menu-logo">
        <Link href="/">{t('title')}</Link>
    </div>
    <div className="menu-close" onClick={toggleMenu}>
        <p>{t('closeButton')}</p>
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
        <p>{t('email')}</p>
    </div>
    <a href="https://www.linkedin.com/in/tyrhen-cameron/">{t('linkedin')} &#8599;</a>
    <a href="https://github.com/TyrhenCameron">{t('github')} &#8599;</a>
    </div>
    </div>
    </div>
    <div className="menu-preview"></div>
</div>
  </div>
  );
};

export default Menu
