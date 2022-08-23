import React from "react";

export interface button{
    type: "button" | "submit" | undefined,
    children: string
    onClick?: React.MouseEventHandler
}