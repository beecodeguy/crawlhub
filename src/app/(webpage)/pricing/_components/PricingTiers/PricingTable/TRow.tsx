import React from "react";

interface IProps {
  basic: string;
  enterprise: string;
  standard: string;
  title: string;
}

const TRow: React.FC<IProps> = ({ basic, enterprise, standard, title }) => {
  return (
    <tr>
      <td className="border-t border-x border-[#000000] typography-h5 font-semibold">{title}</td>
      <td className="border-t border-x border-[#000000]">{basic}</td>
      <td className="border-t border-x border-[#000000]">{standard}</td>
      <td className="border-t border-x border-[#000000]">{enterprise}</td>
    </tr>
  );
};

export default TRow;
