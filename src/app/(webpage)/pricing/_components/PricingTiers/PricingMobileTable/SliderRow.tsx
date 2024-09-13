import React from "react";

interface IProps {
  basic: string;
  enterprise: string;
  standard: string;
  title: string;
  column: "basic" | "standard" | "enterprise";
}

const SliderRow: React.FC<IProps> = ({
  basic,
  enterprise,
  standard,
  title,
  column,
}) => {
  return (
    <tr>
      <td className="border-t border-x border-[#000000] typography-h5 font-semibold">
        {title}
      </td>
      {column === "basic" && (
        <td className="border-t border-x border-[#000000]">{basic}</td>
      )}
      {column === "standard" && (
        <td className="border-t border-x border-[#000000]">{standard}</td>
      )}
      {column === "enterprise" && (
        <td className="border-t border-x border-[#000000]">{enterprise}</td>
      )}
    </tr>
  );
};

export default SliderRow;
