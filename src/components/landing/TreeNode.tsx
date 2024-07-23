"use client";
import Tree from "@/components/landing/Tree";
import { TreeNodeType } from "@/utils/types";
import { useState } from "react";

export default function TreeNode({
  node,
  activeKey,
  setActiveKey,
}: {
  node: TreeNodeType;
  activeKey: string;
  setActiveKey: (key: string) => void;
}) {
  const { children, label, key, show } = node;
  const [showChildren, setShowChildren] = useState<boolean>(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
    setActiveKey(key);
  };

  const isActive = activeKey === key;

  return (
    <>
      <div
        onClick={handleClick}
        style={{ marginBottom: "10px" }}
        key={key}
        id={`item-${key}`}
        aria-disabled={!show}
        className={`d-flex cursor-pointer align-items-center border-2 fs-14 fw-600 rounded gap-2 ${
          !show ? "disabled" : ""
        } ${isActive ? "btn btn-primary py-0 text-white" : "text-muted"}`}
      >
        {children?.length && children.length > 0 && (
          <i
            className={`ri-arrow-${showChildren ? "down" : "right"}-s-fill`}
          ></i>
        )}
        <span>
          {key}. {label}
        </span>
      </div>
      {showChildren && (
        <ul style={{ paddingLeft: "1px" }}>
          <Tree
            treeData={children}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        </ul>
      )}
    </>
  );
}
