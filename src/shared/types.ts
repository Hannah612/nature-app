import type { JSX } from "react";

export enum SelectedPage {
  Home = "home",
  Trees = "friendlytrees",
  NaturePage = "naturalsupporters",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export const motionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: {once:true, amount:0.5}, //amount = amount you need to see for animation to trigger 
  transition:{duration:0.2},
  variants: {
      hidden:{opacity:0, x:-50}, //initial state
      visible: {opacity:1, x:0}, //while in view state
  }
}