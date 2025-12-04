;
(function () {
  System.register([], function (_export, _context) {
    "use strict";

    //#region src/app/utils/fileUtils.ts
    async function convertFileToBinaryData(file) {
      const reader = new FileReader();
      return await new Promise((resolve, reject) => {
        reader.onload = () => {
          resolve({
            data: reader.result.split("base64,")?.[1] ?? "",
            mimeType: file.type,
            fileName: file.name,
            fileSize: `${file.size} bytes`,
            fileExtension: file.name.split(".").pop() ?? "",
            fileType: file.type.split("/")[0]
          });
        };
        reader.onerror = () => {
          reject(/* @__PURE__ */new Error("Failed to convert file to binary data"));
        };
        reader.readAsDataURL(file);
      });
    }

    //#endregion
    _export("t", convertFileToBinaryData);
    return {
      setters: [],
      execute: function () {}
    };
  });
})();