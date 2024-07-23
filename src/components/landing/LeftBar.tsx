"use client";
import Tree from "@/components/landing/Tree";
import React, { useState } from "react";
import { Card, CardBody, Input } from "reactstrap";

export default function LeftBar() {
  const [activeKey, setActiveKey] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const treeData = [
    {
      key: "0",
      label: "Introduction",
      show: true,
    },
    {
      key: "1",
      show: true,
      label: "Documents",
      children: [
        {
          show: true,
          key: "1-0",
          label: "Document 1-1",
          children: [
            { key: "1-1-1", show: true, label: "Document-0-1.doc" },
            { key: "1-1-2", show: false, label: "Document-0-2.doc" },
          ],
        },
      ],
    },
    {
      key: "2",
      show: true,
      label: "Documents",
      children: [
        {
          show: true,
          key: "2-0",
          label: "Document 1-1",
          children: [
            { key: "2-1-1", show: true, label: "Document-0-1.doc" },
            { key: "2-1-2", show: false, label: "Document-0-2.doc" },
          ],
        },
      ],
    },
    {
      key: "3",
      show: false,
      label: "Desktop",
      children: [
        { key: "3-0", label: "document1.doc" },
        { key: "3-1", label: "document-2.doc" },
      ],
    },
    {
      show: false,
      key: "4",
      label: "Downloads",
    },
  ];

  return (
    <React.Fragment>
      <Card>
        <CardBody className="d-flex flex-column gap-3">
          <Input
            type="text"
            className="form-control"
            placeholder="Search..."
            id="search-options"
            aria-label="Search Options"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div
            className="d-flex flex-column gap-2"
            style={{ height: "80vh", overflow: "scroll" }}
          >
            <Tree
              treeData={treeData}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
            />
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}
