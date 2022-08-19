import React from "react";

export interface input{
    label: React.HTMLInputTypeAttribute,
    type: React.HTMLInputTypeAttribute,
    name: React.HTMLInputTypeAttribute
    value: React.HTMLInputTypeAttribute,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
}