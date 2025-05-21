import React, { useState, useEffect } from "react";
import TreeNode from "./TreeNode";
const fetchData = async () => {
  return [
    {
      name: "DiseaseAtlas",
      subitems: [
        {
          name: "components",
          subitems: [
            { name: "DiseaseAtlasAssociatedPopup.js" },
            { name: "DiseaseAtlasTreeFolder.js" },
          ],
        },
        {
          name: "store",
          subitems: [
            { name: "reducer.js" },
            { name: "saga.js" },
            { name: "selectors.js" },
          ],
        },
        { name: "DiseaseAtlasPage.js" },
        { name: "DiseaseAtlasPage.css" },
        { name: "Utils.js" },
      ],
    },
    { name: "FindRelated" },
  ];
};
const TreeView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const handleClick = (node) => {
    if (node.subitems) {
      const childNames = node.subitems.map((child) => child.name);
      alert(`Direct children of ${node.name}:\n- ${childNames.join("\n- ")}`);
    }
  };

  return (
    <div>
      <h2>Tree View</h2>
      {data.map((node, index) => (
        <TreeNode key={index} node={node} onClick={handleClick} />
      ))}
    </div>
  );
};

export default TreeView;
