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