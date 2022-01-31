import React from "react";

export interface IText {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    className?: string;
    color?: 'text'|'disabled';
    children: React.ReactNode;
}