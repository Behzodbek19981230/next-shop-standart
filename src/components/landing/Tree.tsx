"use client";
import TreeNode from "@/components/landing/TreeNode";
import { TreeNodeType } from "@/utils/types";

export default function Tree({
  treeData,
  activeKey,
  setActiveKey,
}: {
  treeData: TreeNodeType[] | undefined;
  activeKey: any;
  setActiveKey: any;
}) {
  if (treeData?.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <ul className="ps-0" role="tree" aria-labelledby="tree-label">
      {treeData?.map((node) => (
        <TreeNode
          key={node.key}
          node={node}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
        />
      ))}
    </ul>
  );
}
