import React, { useState } from "react";
import { useEffect } from "react";
import { css } from "@emotion/css";
import { Button, Popover } from "tailwindcss";

const ShoppingCart = () => {
    const PopoverExample = () => {
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(!open);
        };
        return (
            <div>
                <Button onClick={handleClick}>Show popover</Button>
                <Popover
                    open={open}
                    placement="right"
                    trigger="click"
                    css={css`
          max-width: 200px;
          padding: 1rem;
          background-color: #fff;
          border-radius: 0.25rem;
        }
      >
        This is a popover!
      </Popover>
    </div>
    )
}
export default ShoppingCart;