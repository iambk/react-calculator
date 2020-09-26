import React from 'react';
import './Input.css';

const Input = (props) => <input id={props.id} type="text" value={props.value} placeholder={props.placeholder} onChange={props.onChange}></input>;

export default Input;