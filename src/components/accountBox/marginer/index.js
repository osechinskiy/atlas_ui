import React from "react";
import styled from "styled-components";

const HorizontalMargin = styled.span`
  display: flex;
  width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span`
  display: flex;
  height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

function Marginer({ direction = "horizontal", ...props }) {
    if (direction === "horizontal") {
        return <HorizontalMargin {...props} />;
    } else {
        return <VerticalMargin {...props} />;
    }
}

export { Marginer };