import React, { ImgHTMLAttributes } from 'react';
import { ITheme } from 'types';
import plus from 'icons/plus.svg';
import './icon.css';
import ButtonIconTypesEnum from './ButtonIconTypesEnum';
import IButtonIconTypes from './IButtonIconTypes';

const icons = {
  [ButtonIconTypesEnum.recipe]: `<svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="1" cy="1" r="1" fill="black"/><line x1="4" y1="1" x2="24" y2="1" stroke="black" stroke-width="2"/><circle cx="1" cy="16" r="1" fill="black"/><line x1="4" y1="16" x2="24" y2="16" stroke="black" stroke-width="2"/><circle cx="1" cy="11" r="1" fill="black"/><line x1="4" y1="11" x2="24" y2="11" stroke="black" stroke-width="2"/><circle cx="1" cy="6" r="1" fill="black"/><line x1="4" y1="6" x2="24" y2="6" stroke="black" stroke-width="2"/></svg>`,
  [ButtonIconTypesEnum.cross]: `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-0.5" x2="30" y2="-0.5" transform="matrix(0.707107 0.707107 -0.904971 0.425473 0 1.77942)" stroke="black"/><line y1="-0.5" x2="30" y2="-0.5" transform="matrix(0.707107 -0.707107 0.904971 0.425473 1.2132 22.2132)" stroke="black"/></svg>`,
  [ButtonIconTypesEnum.search]: `<svg width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M18.3109 4.1183C23.6361 5.49847 26.8172 11.1563 25.3567 16.7913C23.8963 22.4263 18.3675 25.8268 13.0423 24.4466C7.71704 23.0665 4.53596 17.4086 5.99641 11.7736C7.45686 6.13863 12.9856 2.73813 18.3109 4.1183Z" stroke="black"/></g><g filter="url(#filter1_d)"><path d="M21.4314 21.9722L29.1045 32.2252" stroke="black"/></g><defs><filter id="filter0_d" x="0.142578" y="0.309448" width="31.068" height="31.946" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter><filter id="filter1_d" x="17.0311" y="19.6726" width="16.4737" height="18.8522" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`,
  [ButtonIconTypesEnum.plus]: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M24.5 12.9918H3M13.8315 2V24" stroke="black"/></g><defs><filter id="filter0_d" x="0" y="0" width="27.5" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1.5"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
}

const ComponentButtonIcon = ({icon}: {icon: ButtonIconTypesEnum}): JSX.Element => {
  return (
    <>
      <div className="">
        {icons[icon]}
      </div>
    </>
  )
}

export default ComponentButtonIcon;