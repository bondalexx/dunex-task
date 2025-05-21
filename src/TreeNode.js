import { Folder, FileText } from "lucide-react";
import folderWithFoldersIcon from "./assets/file.png";
const TreeNode = ({ node, onClick }) => {
  const hasChildren = node.subitems && node.subitems.length > 0;
  const hasFolders =
    hasChildren && node.subitems.some((child) => child.subitems);

  const getIcon = () => {
    if (hasChildren) {
      if (hasFolders) {
        return (
          <img
            src={folderWithFoldersIcon}
            alt="custom folder"
            width={16}
            height={16}
          />
        );
      }
      return <Folder size={16} />;
    }
    return <FileText size={16} />;
  };

  return (
    <div style={{ paddingLeft: 16 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: 6,
        }}
        onClick={() => onClick(node)}
      >
        {getIcon()} {node.name}
      </div>
      {hasChildren && (
        <div>
          {node.subitems.map((child, index) => (
            <TreeNode key={index} node={child} onClick={onClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
