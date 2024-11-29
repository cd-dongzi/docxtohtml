"use client";
import React from "react";
import mammoth from "mammoth";
import { tempHtml } from "./utils";

const styles = {
  title: {
    name: "Title",
    content: "h3[style='margin-bottom: 40px'] > strong > span",
  },
};

const hyperlinkName = "hyperlink";

const createOptions = () => {
  let index = 0;
  return {
    styleMap: [
      `p[style-name='${styles.title.name}'] => ${styles.title.content}`,
    ],
    transformDocument: (mammoth as any).transforms.paragraph(
      (v: Record<string, any>) => transformParagraph(v, index++),
    ),
  };
};
const createText = (value: string) => {
  return {
    type: "text",
    value,
  };
};
const createHyperlink = (value: string) => {
  return {
    type: hyperlinkName,
    href: value,
    targetFrame: "_blank",
    value,
    children: [
      {
        type: "text",
        value,
      },
    ],
  };
};
const createEmailHyperlink = (value: string) => {
  return {
    type: hyperlinkName,
    href: `mailto:${value}`,
    targetFrame: "_blank",
    value,
    children: [
      {
        type: "text",
        value,
      },
    ],
  };
};
const splitText = (
  value: string,
  re: RegExp,
  create: typeof createHyperlink,
) => {
  const list = value.split(re).reduce(
    (acc, part, index, array) => {
      if (index < array.length - 1) {
        const val = value.match(re)?.[index];
        if (val) {
          acc.push(createText(part), create(val));
        }
      } else {
        acc.push(createText(part));
      }
      return acc;
    },
    [] as Record<string, any>[],
  );
  return list;
};
const formatText = (value: string, parentType?: string) => {
  if (parentType === hyperlinkName) {
    return [createText(value)];
  }
  const emailRe = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
  if (emailRe.test(value)) {
    return splitText(value, emailRe, createEmailHyperlink);
  }
  const urlRe = /(?:https?:\/\/|www\.)[^\s/$.?#].[^\s（）]*/gi;
  if (urlRe.test(value)) {
    return splitText(value, urlRe, createHyperlink);
  }
  return [createText(value)];
};

function transformText(node: Record<string, any>, parentType?: string) {
  if (node.type === "text") {
    const list = formatText(node.value, parentType);
    return list;
  }
  if (node.type === hyperlinkName) {
    node.targetFrame = "_blank";
  }
  if (node.children?.length) {
    node.children = node.children
      .map((child: Record<string, any>) => {
        return transformText(child, node.type);
      })
      .reduce(
        (acc: Record<string, any>[], item: Record<string, any>) => [
          ...acc,
          ...(Array.isArray(item) ? item : [item]),
        ],
        [] as Record<string, any>[],
      );
  }
  return node;
}
function transformParagraph(paragraph: Record<string, any>, index: number) {
  let styleName = paragraph.styleName;
  // 第一行当做标题
  if (
    index === 0 &&
    (!styleName || styleName === "默认" || styleName === "normal")
  ) {
    styleName = styles.title.name;
  }
  paragraph = transformText(paragraph);
  return {
    ...paragraph,
    styleName,
  };
}

const DocxToHtml = () => {
  const coverToHtml = (arrayBuffer: ArrayBuffer) => {
    const options = createOptions();
    mammoth
      .convertToHtml({ arrayBuffer }, options)
      .then((res) => {
        const url = window.URL.createObjectURL(
          new Blob(
            [
              tempHtml({
                html: res.value,
              }),
            ],
            { type: "text/plain" },
          ),
        );
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "index.html");
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function (e) {
      const arrayBuffer = e.target!.result as ArrayBuffer;
      coverToHtml(arrayBuffer);
    };
    reader.onerror = function (e) {
      console.error("File could not be read! Code " + e.target!.error);
    };
  };
  return (
    <div className="relative border border-[#ddd] bg-[#f1f1f1] inline-block cursor-pointer">
      <input
        type="file"
        id="fileInput"
        accept=".doc,.docx"
        onChange={onChange}
        className="w-full h-full absolute left-0 top-0 opacity-0"
      />
      <label
        htmlFor="fileInput"
        className="text-[#333] text-sm px-3 py-2 inline-block"
      >
        <span>选择文件</span>
      </label>
    </div>
  );
};

export default DocxToHtml;
