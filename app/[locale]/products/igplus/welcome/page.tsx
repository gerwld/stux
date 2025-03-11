"use client";
import WelcomeContent from '@/components/WelcomeContent/WelcomeContent';
import { Product } from '../../preloaded';

const Welcome = () => {
  const PRODUCT_KEY:Product["alias"] = "IGPLUS";
  const PRODUCT_TITLE:Product["title"] = "IGPlus";

  return <WelcomeContent PRODUCT_KEY={PRODUCT_KEY} PRODUCT_TITLE={PRODUCT_TITLE}/>;
};

export default Welcome;
