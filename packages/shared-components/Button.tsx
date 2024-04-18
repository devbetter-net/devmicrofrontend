// packages/shared-components/Button.js
import React from 'react';

const Button = ({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
);

export default Button;