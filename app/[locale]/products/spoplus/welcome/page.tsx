"use client";
import WelcomeContent from '@/components/WelcomeContent/WelcomeContent';
import { Product } from '../../preloaded';

const Welcome = () => {
  const PRODUCT_KEY:Product["alias"] = "SPOPLUS";
  const PRODUCT_TITLE:Product["title"] = "SpoPlus";

  return <WelcomeContent PRODUCT_KEY={PRODUCT_KEY} PRODUCT_TITLE={PRODUCT_TITLE}/>;
};

export default Welcome;
