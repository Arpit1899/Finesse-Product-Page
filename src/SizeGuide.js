import React from "react";
import "./SizeGuide.css";

const SizeGuide = () => {
  const sizeData = [
    {
      size: "XS",
      us: "0-2",
      bust: '33.5"',
      waist: '25.5"',
      hip: '36.5"',
      inseam: '32"',
    },
    {
      size: "S",
      us: "4-6",
      bust: '35"',
      waist: '27"',
      hip: '38"',
      inseam: '32"',
    },
    {
      size: "M",
      us: "8-10",
      bust: '37"',
      waist: '29"',
      hip: '40"',
      inseam: '32"',
    },
    {
      size: "L",
      us: "12-14",
      bust: '39"',
      waist: '31"',
      hip: '42"',
      inseam: '32"',
    },
    {
      size: "XL",
      us: "14-16",
      bust: '41"',
      waist: '33"',
      hip: '44"',
      inseam: '32"',
    },
    {
      size: "1X",
      us: "16-18",
      bust: '45"',
      waist: '40"',
      hip: '50"',
      inseam: '33.5"',
    },
    {
      size: "2X",
      us: "18-20",
      bust: '47"',
      waist: '42"',
      hip: '52"',
      inseam: '33.5"',
    },
    {
      size: "3X",
      us: "20-22",
      bust: '49"',
      waist: '44"',
      hip: '54"',
      inseam: '33.5"',
    },
  ];

  return (
    <div className="size-guide">
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>US</th>
            <th>Bust</th>
            <th>Waist</th>
            <th>Hip</th>
            <th>Inseam</th>
          </tr>
        </thead>
        <tbody>
          {sizeData.map((row, index) => (
            <tr key={index}>
              <td>{row.size}</td>
              <td>{row.us}</td>
              <td>{row.bust}</td>
              <td>{row.waist}</td>
              <td>{row.hip}</td>
              <td>{row.inseam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SizeGuide;
