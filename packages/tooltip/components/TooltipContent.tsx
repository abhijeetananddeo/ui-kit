import * as React from "react";
import { cx } from "@emotion/css";
import { tooltip, getTooltipArrow } from "../style";
import { inverseColorMode, padding } from "../../shared/styles/styleUtils";
import { alignContainerWithCaretStyles } from "../../shared/styles/containerWithCaret";
import { BaseTooltipProps } from "./Tooltip";
import { Direction } from "../../dropdownable/components/Dropdownable";

export interface TooltipContentProps extends BaseTooltipProps {
  direction?: Direction;
  isOpen: boolean;
}

const TooltipContent = React.memo(
  ({
    direction = Direction.TopCenter,
    children,
    id,
    maxWidth,
    minWidth,
    isOpen
  }: TooltipContentProps) => {
    return (
      <>
        <div
          aria-hidden={!isOpen}
          id={id}
          className={cx(
            tooltip,
            alignContainerWithCaretStyles(direction),
            inverseColorMode,
            padding("horiz", "s"),
            padding("vert", "xs")
          )}
          role="tooltip"
          style={{
            minWidth,
            maxWidth: maxWidth || undefined
          }}
          data-cy="tooltipContent"
        >
          {children}
        </div>
        <div className={getTooltipArrow(direction)} />
      </>
    );
  }
);

export default TooltipContent;
