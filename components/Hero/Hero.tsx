import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import style from "./style.module.css";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <header className={style.wrapper}>
      <div className={style.wrapper_texture}>
      <Navbar />
      <div className={style.content}>
        <h1 className={style.title}>Enhance Your Daily <br/>Experience With Our Solutions</h1>
        <p className={style.desc}>From browser extensions and CLI tools to libraries and mobile applications, <br/>our products always focus on attention to detail and user experience.</p>
        <div className={style.img_preview}>
          <img src="/hero-preview.svg" alt="Preview" />
        </div>
        <div className={style.btn_sect}>
          <Link href="/products" className={style.btn_1}>Explore All Products</Link>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Hero;
