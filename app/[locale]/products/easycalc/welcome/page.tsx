"use client";
import WelcomeContent from '@/components/WelcomeContent/WelcomeContent';
import { Product } from '../../preloaded';

const Welcome = () => {
  const PRODUCT_KEY:Product["alias"] = "EASYCALC";
  const PRODUCT_TITLE:Product["title"] = "EasyCalc";

  return <WelcomeContent PRODUCT_KEY={PRODUCT_KEY} PRODUCT_TITLE={PRODUCT_TITLE}/>;
};

export default Welcome;
