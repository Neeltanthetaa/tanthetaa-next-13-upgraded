// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `**/*.json`,
  fields: {
    data: {
      type: "json",
      content: "Guiding json index",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Guide]
});
export {
  Guide,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-TVS7GEKQ.mjs.map
