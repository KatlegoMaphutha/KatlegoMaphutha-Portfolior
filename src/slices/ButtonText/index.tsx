import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Button from "@/components/Button";
import Bounded from "@/components/Bounded";

/**
 * Props for `ButtonText`.
 */
export type ButtonTextProps = SliceComponentProps<Content.ButtonTextSlice>;

/**
 * Component for "ButtonText" Slices.
 */
const ButtonText = ({ slice }: ButtonTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <Button
          linkField={slice.primary.link} 
          label={slice.primary.name}     
        />
      </div>
    </Bounded>
  );
};

export default ButtonText;
